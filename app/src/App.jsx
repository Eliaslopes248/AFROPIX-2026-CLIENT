import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount'
import EventFeed from './pages/EventFeed'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create-acc' element={<CreateAccount/>}/>
        <Route path='/event-feed' element={<EventFeed/>}/>
        <Route path='/landing-page' element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
