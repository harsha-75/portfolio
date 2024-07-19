import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faLaptopCode, faTrophy } from '@fortawesome/free-solid-svg-icons';
import nitwlogo from '../../assets/logo/nitwlogo.png'
import narayanalogo from '../../assets/logo/logonarayana.jpeg'
import amazonlogo from '../../assets/logo/amazonlogo.png'
function Aboutme() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
    <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
      
      {/* Education Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faGraduationCap} className="text-yellow-700 text-3xl mr-4" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="flex items-center mb-2">
          <img src={nitwlogo} alt="NIT Warangal" className="w-12 h-12 mr-4"/>
          <div>
            <h3 className="text-xl font-medium">National Institute of Technology, Warangal</h3>
            <p>B.Tech in Electronics and Communication Engineering (2020-2024)</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={narayanalogo} alt="Narayana Junior College" className="w-12 h-12 mr-4"/>
          <div>
            <h3 className="text-xl font-medium">Narayana Junior College</h3>
            <p>Board of Secondary Education, Telangana (2018-2020)</p>
          </div>
        </div>
      </div>
      
      {/* Experience Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faBriefcase} className="text-yellow-700 text-3xl mr-4" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        <div className="flex items-center">
          <img src={amazonlogo} alt="Amazon" className="w-12 h-12 mr-4"/>
          <div>
            <h3 className="text-xl font-medium">Amazon</h3>
            <p>Software Development Engineer Intern (May 2022 - July 2022)</p>
            <ul className="list-disc list-inside ml-4">
              <li>Analyzed the past 6-12 months of ordering history of selected customers and implemented queries.</li>
              <li>Displayed ordered patterns.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Technical Skills Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faLaptopCode} className="text-yellow-700 text-3xl mr-4" />
          <h2 className="text-2xl font-semibold">Technical Skills and Interests</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><span className="font-medium">Languages:</span> C++, C, Java, HTML, CSS, JavaScript, SQL, Verilog</p>
            <p><span className="font-medium">Developer Tools:</span> Git, LT Spice</p>
            <p><span className="font-medium">Frameworks:</span> Spring Boot</p>
          </div>
          <div>
            <p><span className="font-medium">Cloud/Databases:</span> DynamoDB</p>
            <p><span className="font-medium">Soft Skills:</span> Flexibility, Team Work, Time-Keeping</p>
            <p><span className="font-medium">Coursework:</span> Data Structures and Algorithms, OOPS, Data Networks, Digital System Design, CMOS VLSI Design</p>
            <p><span className="font-medium">Areas of Interest:</span> Machine Learning, Computer Networks, Artificial Intelligence, React, Digital Design</p>
          </div>
        </div>
      </div>
      
      {/* Achievements Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faTrophy} className="text-yellow-700 text-3xl mr-4" />
          <h2 className="text-2xl font-semibold">Achievements</h2>
        </div>
        <ul className="list-disc list-inside ml-4">
          <li>Top 0.5 percent in JEE Mains among 10 lakh candidates (2020)</li>
          <li>SIMO gold medalist in school (2014, 2017)</li>
          <li>Completed Internship at Amazon (2023)</li>
        </ul>
      </div>
      
    </div>
  </div>
  )
}

export default Aboutme
