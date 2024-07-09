// export default function App() {
//     return (
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     )
//   }


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home'
import LandingPage from './Pages/LandingPage'
import {Route, Routes} from 'react-router-dom'
import IndukAyam from "./Pages/Induk-ayam";
import State from './Pages/state'
import UseEffect from './Pages/UseEffect'
import UpdateState from './Components/UpdateState'
import Timer from './Pages/Timer'
import Fetch from './Pages/Fetch'
import Animasi from './Pages/Timer'
import FetchApi from './Pages/Fetch'
import ReactContext from './Pages/ReactContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/IndukAyam" element={<IndukAyam/>}/>
      <Route path="state" element={<State/>}/>
      <Route path="/UseEffect" element={<UseEffect/>}/>
      <Route path="/UpdateState" element={<UpdateState/>}/>
      <Route path="/Timer" element={<Animasi/>}/>
      <Route path="/Fetch" element={<FetchApi/>}/>
      <Route path='/ReactContext' element={<ReactContext/>}/>
    </Routes>
    </>
  )
}

export default App
