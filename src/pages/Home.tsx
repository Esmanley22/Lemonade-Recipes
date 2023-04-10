import React from 'react'
import Background from '../assets/images/stand.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-70 text-black rounded border-black border-2'>Welcome to the Lemonade Stand!</h3>
        </div>
    </div>
  )
}

export default Home