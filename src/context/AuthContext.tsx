import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import api from '../lib/axios'

interface UserProfile {
  id?: string
  name?: string
  email?: string
  avatar?: string
}

interface AuthContextType {
  token: string | null
  user: UserProfile | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  fetchProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderProps = { children: ReactNode }

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('access_token'))
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(false)

  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setToken(null)
    setUser(null)
  }

  const extractAvatarUrl = (avatar: unknown): string => {
    if (!avatar) return ''
    if (typeof avatar === 'string') return avatar
    if (typeof avatar === 'object' && avatar !== null) {
      const candidate = (avatar as Record<string, string | undefined>).medium ??
        (avatar as Record<string, string | undefined>).high ??
        (avatar as Record<string, string | undefined>).low
      return candidate ?? ''
    }
    return ''
  }

  const mapUserProfile = (payload: any): UserProfile => ({
    id: payload?.id ?? payload?.user?.id ?? '',
    name: payload?.name ?? payload?.full_name ?? payload?.user?.name ?? '',
    email: payload?.email ?? payload?.user?.email ?? '',
    avatar: extractAvatarUrl(payload?.avatar) || extractAvatarUrl(payload?.user?.avatar),
  })

  const fetchProfile = async () => {
    if (!token) {
      setUser(null)
      return
    }

    setLoading(true)
    try {
      const { data } = await api.get('/auth/profile/')
      setUser(mapUserProfile(data))
    } catch (error) {
      logout()
      throw error
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      const { data } = await api.post('/auth/login/', { email, password })
      const accessToken =
        data?.tokens?.access ??
        data?.access_token ??
        data?.accessToken ??
        data?.access ??
        data?.token

      if (!accessToken) {
        throw new Error('Token ausente na resposta')
      }

      localStorage.setItem('access_token', accessToken)
      const refreshToken = data?.tokens?.refresh ?? data?.refresh_token ?? data?.refresh
      if (refreshToken) {
        localStorage.setItem('refresh_token', refreshToken)
      }
      setToken(accessToken)
      if (data?.user) {
        setUser(mapUserProfile(data.user))
      } else {
        await fetchProfile()
      }
    } catch (error) {
      logout()
      throw error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!token) {
      return
    }

    const loadProfile = async () => {
      try {
        await fetchProfile()
      } catch (error) {
        console.error('Erro ao carregar perfil', error)
      }
    }

    void loadProfile()
  }, [token])

  const value: AuthContextType = {
    token,
    user,
    loading,
    login,
    logout,
    fetchProfile
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }

  return context
}
