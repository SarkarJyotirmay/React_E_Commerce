import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './NotFound'
import SingleProduct from './pages/SingleProduct'
import AuthProvider from './contexts/AuthProvider'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'

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
    {
      path:"profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      )
    },
    {
      path: "/product/:id",
      element: <SingleProduct />
    },
    {
      path: "*",
      element: <NotFound />
    }

  ]
}])
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App