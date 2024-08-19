import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import Home from './routes/Home.tsx'

// Pages

const router = createBrowserRouter([
  {
    path: "/gh_finder_users",
    element: <App />,
    children: [
      {
        path: "/gh_finder_users",
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
