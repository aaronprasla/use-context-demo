import { createContext, useContext, useState } from 'react'
import './App.css'
import Home from './Home';
import Profile from './Profile';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export const NameContext = createContext(null);

function App() {
  const [username, setUsername] = useState('');

  return (
    <>
      <NameContext.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <div>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/profile'>Profile Editing</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </NameContext.Provider>
    </>
  )
}

export default App
