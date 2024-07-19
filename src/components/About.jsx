import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase,faCogs } from '@fortawesome/free-solid-svg-icons'
function About() {
  return (
    <>
   
    <div className="flex flex-col md:flex-row justify-center items-center mt-5">
      {/* Education Card */}
      <div className="bg-white shadow-md rounded-lg p-6 m-4 md:w-1/3 w-full md:mx-2">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faGraduationCap} className="text-blue-500 text-3xl mr-2" />
          <h3 className="text-lg font-semibold">Education</h3>
        </div>
        <p className="text-yellow-700 text-center">NITW</p>
        <h3 className='text-center'>Electronics and communication Engineering 2020-24</h3>
      </div>

      {/* Experience Card */}
      <div className="bg-white shadow-md rounded-lg p-6 m-4 md:w-1/3 w-full md:mx-2">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faBriefcase} className="text-blue-500 text-3xl mr-2" />
          <h3 className="text-lg font-semibold">Experience</h3>
        </div>
        <p className="text-yellow-700 text-center">Amazon</p>
        <h3 className='text-center'>SDE Summer Intern 2023</h3>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center mt-5">
      {/* Skills Card */}
      <div className="bg-white shadow-md rounded-lg p-6 m-4 md:w-1/3 w-full md:mx-2">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faCogs} className="text-blue-500 text-3xl mr-2" />
          <br></br>
          <h3 className="text-lg font-semibold">Skills</h3>
        </div>
        <p className="text-center flex justify-center">
  <div className='text-left w-1/4'>
    <span className='text-yellow-700'>Languages :</span>
  </div>
  <div className='text-left w-3/4'>
    C++, C, Javascript, Java.
  </div>
</p>
<p className="text-center flex justify-center">
  <div className='text-left w-1/4'>
    <span className='text-yellow-700'>Framework :</span>
  </div>
  <div className='text-left w-3/4'>
    React, Springboot.
  </div>
</p>
      </div>
    </div>
        
    </>
  )
}

export default About
