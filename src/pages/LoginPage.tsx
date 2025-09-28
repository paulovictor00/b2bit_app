import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/profile', { replace: true })
    }
  }, [token, navigate])

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 px-4 py-12">
      <LoginForm />
    </main>
  )
}
