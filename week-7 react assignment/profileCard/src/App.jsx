import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imageSrc from './IMG_20220604_134229.jpg';

function App() {

  return (
    <div className='h-screen'>
      <div className='flex justify-center border-2  items-center'>
        
        <div className='bg-red-400 p-4 flex flex-col justify-center items-center border-blue-600 border-4'>
          <img className='w-28 rounded-[50%] my-5' src={imageSrc} alt="" />

          <div className='flex flex-col justify-center items-center my-2'>
            <h2>Prakhar Sinha <span>100</span></h2>
            <h2>Bhadohi</h2>
          </div>
          <hr />
          <hr />
          <hr />

          <div className='flex justify-around gap-5'>
            <div className='text-center'>
              <h2>80k</h2> 
              <p>Followers</p>
            </div>
            <div className='text-center'>
              <h2>803k</h2>
              <p>Likes</p>
            </div>
            <div className='text-center'>
              <h2>1.4k</h2>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
