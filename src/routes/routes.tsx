
import { Route,Routes } from 'react-router-dom'
import Login from '../pages/login'
import Sales from '../pages/sales'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sales' element={<Sales/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
