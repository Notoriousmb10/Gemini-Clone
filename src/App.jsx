import React from 'react'
import Sidebar from './assets/components/Sidebar/Sidebar'
import HomePage from './assets/components/HomePage/HomePage'
import Navbar from './assets/components/Navbar/Navbar'
import Settings from './assets/components/Settings/Settings'
import Help from './assets/components/Help/Help'
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import "./index.css"


const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Sidebar/><HomePage/></>
    },
    {
      path: "/Help",
      element: <><Navbar/><Sidebar/><Help/></>
    },
    { 
      path: "/Settings",
      element:  <><Navbar/><Sidebar/><Settings/></>
    }     
  ])
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
