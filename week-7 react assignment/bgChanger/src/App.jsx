import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function changeColor(e){
    console.log(e.target.innerText)
    if(e.target.innerText=="default")
    {
      document.body.style.backgroundColor="orange"
    }
    else{
      document.body.style.backgroundColor=e.target.innerText

    }
  }
  return (
    <div className='relative min-h-screen'>
      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        <button className='bg-red-500 p-3' onClick={changeColor}>red</button>
        <button className='bg-yellow-500 p-3' onClick={changeColor}>yellow</button>
        <button className='bg-black p-3 text-white' onClick={changeColor}>black</button>
        <button className='bg-purple-500 p-3' onClick={changeColor}>purple</button>
        <button className='bg-green-500 p-3' onClick={changeColor}>green</button>
        <button className='bg-blue-500 p-3' onClick={changeColor}>blue</button>
        <button className='bg-orange-500 p-3' onClick={changeColor}>default</button>
      </div>
    </div>
  )
}

export default App
