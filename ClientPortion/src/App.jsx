import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup'
function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route  path="/users/signin" element={<Login/>}/>
          <Route path="/users/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>


    </div>
  )
}

export default App
