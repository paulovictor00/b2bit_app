import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import LoginPage from '../pages/LoginPage'

// mock fetch/axios via MSW ou simples mock de storage

function renderWithRouter(){
const router = createMemoryRouter([{ path: '/', element: <LoginPage/> }])
return render(
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
)
}

test('renderiza inputs de login', () => {
renderWithRouter()
expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument()
expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument()
})