import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([{
  path: "/",
  element: <First />,
  children:[
    {index: true,
      element: <Home />
    },
    {
      path: "/about", 
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },

  ]
}])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App