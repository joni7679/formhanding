import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Componets/About.jsx'
import Serivecs from './Serivecs.jsx'
import Course from './Course.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: "/serives",
    element: <Serivecs />
  },
  {
    path: "serives/:id",
    element: <Course/>
  },



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
