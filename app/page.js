'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const getTasks = async () => {
    const res = await fetch('http://localhost:3001/api', {
      method: 'GET',
    })
    const resData = await res.json()
    if (!resData.status) {
      console.log(resData.msg)
      return
    }
    setTasks(resData.data)
  }
  useEffect(() => {
    getTasks()
  }, [])
  const handleCheck = async (e) => {
    const res = await fetch('http://localhost:3001/api/changestatus', {
      method: 'PUT',
      body: JSON.stringify({
        id: e.target.value,
        status: e.target.checked ? 2 : 1,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const resData = await res.json()
    console.log('resData', resData)
    getTasks()
    console.log('e', e.target.checked)
  }
  const addNewTask = async () => {
    if (!newTask.trim()) {
      console.log('Please enter new task')
      return
    }
    const res = await fetch('http://localhost:3001/api/create', {
      method: 'POST',
      body: JSON.stringify({ task: newTask }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const resData = await res.json()
    if (!resData.status) {
      console.log(resData.msg)
      return
    }
    getTasks()
  }
  return (
    <main className='background'>
      <div className='logo'>Rtoodo</div>
      <div className='container'>
        <div className='row align-items-center justify-content-center flex-column' style={{ height: '100vh' }}>
          <div className='card col-md-6 col-12 mb-4'>
            <div className='card-body'>
              <div className='taskpad'>
                <button onClick={addNewTask}>
                  <i className='bi bi-plus-lg' />
                </button>
                <input type='text' name='task' placeholder="Let's complete incompleted..." onChange={({ target: { value } }) => setNewTask(value)} />
              </div>
            </div>
          </div>
          <div className='card col-md-6 col-12 p-0'>
            <div className='card-body p-0'>
              {tasks.map((task, i) => {
                return (
                  <div className={`tasks border-dark px-4 ${task.status == 2 ? 'completed' : ''} ${i !== tasks.length - 1 ? 'border-bottom' : ''}`} key={i}>
                    <label className='chekBoxContainer'>
                      <input type='checkbox' value={task._id} checked={task.status == 2} onChange={handleCheck} />
                      <div className='checkmark'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                          <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32} d='M416 128L192 384l-96-96' />
                        </svg>
                      </div>
                    </label>
                    <p className='m-0'>{task.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
