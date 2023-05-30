import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import UserDetails from './pages/userDetails/UserDetails'
import './App.scss'


function App() {
  

  return (
    <div className='app'> 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user' element={<UserDetails />} />
      </Routes>      
    </div>
  )
}

export default App
