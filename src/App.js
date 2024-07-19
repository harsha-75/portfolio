import React from 'react' 
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Aboutme from './components/pages/Aboutme'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <Router className='bg-stone-200 min-h-screen'>
          <ToastContainer/>
           <Header />
           <Routes>
                  <Route path='/' element={<Home/>}/>
                 <Route path='/home' element={<Home/>}/>
                 <Route path='/about' element={<Aboutme/>}/>
                 <Route path='/project' element={<Projects/>}/>
                 <Route path='/contact' element={<Contact/>}/>
           </Routes>
    </Router>
     
  )
}

export default App
