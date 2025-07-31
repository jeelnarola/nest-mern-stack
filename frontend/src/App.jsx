import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import { routers } from './Routers/User.Router'
import {RouterProvider} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage/> */}
        <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
