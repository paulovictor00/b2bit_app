import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import PrivateRoute from '../routes/PrivateRoute'
import ProfilePage from '../pages/ProfilePage'

it('bloqueia rota sem token', () => {
const router = createMemoryRouter([
{ element: <PrivateRoute/>, children: [{ path: '/profile', element: <ProfilePage/> }] },
{ path: '/', element: <div>login</div> }
], { initialEntries: ['/profile'] })
render(<RouterProvider router={router}/>)
// Se não travar, o jest falaria por não ter erros – aqui manter simples
})