import React from 'react'
import profileImage from '../assets/profile.jpeg'
import resume from '../assets/pages/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import About from './About'
import { useNavigate } from 'react-router-dom'
function Home() {
    const downloadResume= ()=>{
            window.open(resume)
    }
   const navigate=useNavigate();
  return (
    <>
    
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around mt-5">
      <img src={profileImage} alt="Profile" className="w-80 h-80 rounded-full mb-5 md:ml-10 md:mr-20" />
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-center md:text-left">Hello, I'm</h1>
        <h1 className="text-3xl mb-3 mt-2 text-center md:text-left">Manne Harsha Vardhan</h1>
        <h2 className="text-2xl font-light text-center md:text-left">Software Developer</h2>
        <div className="flex mt-6 justify-center md:justify-start">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-5" onClick={downloadResume}>
            Download CV
          </button>
          <button className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={()=>navigate('/contact')}>
            Contact me
          </button>
        </div>
        <div className="flex mt-6 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/harshavardhan-manne-006319206/" className="mr-6 text-3xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/harsha-75" className="text-3xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
          <About/>
    </>
  )
}

export default Home
