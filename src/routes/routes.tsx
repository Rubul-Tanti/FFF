
import { Route,Routes } from 'react-router-dom'
import Login from '../pages/login'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
