import React from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate= useNavigate();
  return (
    <header className='relative bg-slate-700 text-white py-1 md:py-3'>
    <ul className='flex justify-center md:justify-end pt-3 pb-3'>
      <li className="mr-5 md:mr-10 hover:text-yellow-500" ><button onClick={
             ()=>{
                   navigate('/home')
             }
        }>
          Home
        </button>
        </li>
      <li className='mr-5 md:mr-10 hover:text-yellow-500' ><button onClick={()=> navigate('/about')}>
           About
        </button></li>
      <li className='mr-5 md:mr-10 hover:text-yellow-500'><button onClick={()=> navigate('/project')}>
           Projects
        </button></li>
      <li className='mr-5 md:mr-10 hover:text-yellow-500'><button onClick={()=> navigate('/contact')}>
           Contact
        </button></li>
    </ul>
  </header>
  )
}

export default Header