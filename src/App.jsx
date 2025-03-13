import {createBrowserRouter,Outlet, Route, RouterProvider} from 'react-router-dom'
import { Navbar } from './component/Navbar'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'


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
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/login",
    element : <Login/>
  }, 
  {
    path: "/register",
    element : <Register/>
  }
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
