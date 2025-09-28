import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import CalendarPage from '../pages/CalendarPage'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
{ path: '/', element: <LoginPage/> },
{
element: <PrivateRoute/>,
children: [
{ path: '/profile', element: <ProfilePage/> },
{ path: '/schedule', element: <CalendarPage/> },
]
}
])

export default router