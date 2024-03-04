import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Root from './pages/Root.jsx'
import Route from './pages/Route.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import User from './pages/User.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<Root/>,
  children:[
    {
    path:'home',
    element:<Route/>
   },
    {
    path:'about',
    element:<About/>
   }
   ,
    {
    path:'contact',
    element:<Contact/>
   }
   ,
    {
    path:'user/:userId',
    element:<User/>
   }
]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
