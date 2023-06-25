import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {

  const nav = useNavigate();


  return (
    <div className='h-[500px] w-[500px] mx-auto'>
      <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_3X1oGR.json" background="transparent" speed="1" loop autoplay></lottie-player>

      <div className='text-center space-y-2'>
        <h1 className='text-xl'>Page Not Found</h1>
        <button
          onClick={() => nav('/')}
          className='text-pink-600'>Click To Go Home Page</button>

      </div>

    </div>
  )
}

export default NotFound
