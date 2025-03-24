import {createBrowserRouter,Outlet, Route, RouterProvider} from 'react-router-dom'
import { Navbar } from './component/Navbar'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { useContext } from 'react'
import { AuthContext } from './Context/Context'

const Layout = () => {
  return (
    <>
    <Navbar />
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element : <Login/>
  },
  {
    path: "/register",
    element : <Register/>
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />
      }
    ]
  }, 
  
])

function App() {
  

  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
