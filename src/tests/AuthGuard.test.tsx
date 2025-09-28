import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from '../routes/PrivateRoute'
import ProfilePage from '../pages/ProfilePage'

it('bloqueia rota sem token', () => {
  render(
    <MemoryRouter initialEntries={['/profile']}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/" element={<div>login</div>} />
      </Routes>
    </MemoryRouter>,
  )

  expect(screen.getByText('login')).toBeInTheDocument()
})
