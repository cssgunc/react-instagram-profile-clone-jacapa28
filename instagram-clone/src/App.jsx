import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Post1 from '../public/post1.png'
import Post2 from '../public/post2.png'
import Post3 from '../public/post3.jpg'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path='/publix' element={<Post image={Post1} likes='143' messages='18'/>}/>
          <Route path='/school' element={<Post image={Post2} likes='112' messages='22'/>}/>
          <Route path='/unc' element={<Post image={Post3} likes='108' messages='15'/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
