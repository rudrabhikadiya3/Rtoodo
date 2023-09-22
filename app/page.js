export default function Home() {
  return (
    <main className='background'>
      <div className='logo'>Rtoodo</div>
      <div className='container'>
        <div className='row align-items-center justify-content-center flex-column' style={{ height: '100vh' }}>
          <div className='card col-md-6 col-12 mb-4'>
            <div className='card-body'>
              <div className='taskpad'>
                <button>
                  <i className='bi bi-plus-lg' />
                </button>
                <input type='text' name='task' placeholder="Let's complete incompleted..." />
              </div>
            </div>
          </div>
          <div className='card col-md-6 col-12 p-0'>
            <div className='card-body p-0'>
              <div className='tasks border-bottom border-dark px-4'>
                <label className='chekBoxContainer'>
                  <input type='checkbox' />
                  <div className='checkmark'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                      <title>Checkmark</title>
                      <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32} d='M416 128L192 384l-96-96' />
                    </svg>
                  </div>
                </label>
                <p className='m-0'>Read for 8 Minutes</p>
              </div>
              <div className='tasks border-dark px-4 completed'>
                <label className='chekBoxContainer'>
                  <input type='checkbox' defaultChecked='checked' />
                  <div className='checkmark'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                      <title>Checkmark</title>
                      <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32} d='M416 128L192 384l-96-96' />
                    </svg>
                  </div>
                </label>
                <p className='m-0'>Read for 8 Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
