import { Outlet } from 'react-router-dom'
import classes from './App.module.css'
import './Global.css'

function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Finder Users</h1>
      <Outlet />
    </div>
  )
}

export default App
