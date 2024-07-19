import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import {  faTasks } from '@fortawesome/free-solid-svg-icons'
function Projects() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col items-center">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FontAwesomeIcon icon={faTasks} className="text-blue-500 text-2xl mr-2" />
              Task List Project
            </h2>
          <p className="mb-4">
            This is a MERN stack CRUD application that demonstrates the use of MongoDB, Express.js, React.js, and Node.js. It includes functionality for creating, reading, updating, and deleting Tasks.
      
          </p>
          <ul className='mb-5'>
              <li>These uses JWT Auth for Login Authentication</li>
          </ul>
          <a
            href="https://github.com/harsha-75/merncrud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Projects
