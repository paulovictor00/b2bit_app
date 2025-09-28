import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { logout } = useAuth()
  const nav = useNavigate()
  const { t, i18n } = useTranslation()
  const loc = useLocation()
  const isSchedule = loc.pathname === '/schedule'
  const targetPath = isSchedule ? '/profile' : '/schedule'
  const actionLabel = isSchedule ? t('profile') : t('schedule')
  const actionColor = isSchedule ? 'bg-slate-600' : 'bg-[#022744]'

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/profile" className="text-2xl font-black">
          <span className="text-[#022744]">b2b</span>
          <span className="text-[#FDCF00]">it</span>
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => nav(targetPath)}
            className={`px-4 py-2 rounded-xl font-medium text-white ${actionColor}`}
          >
            {actionLabel}
          </button>
          <button
            onClick={() => {
              logout()
              nav('/')
            }}
            className="px-4 py-2 rounded-xl font-medium text-white bg-[#022744]"
          >
            {t('logout')}
          </button>
          <select
            aria-label="language"
            className="ml-2 rounded-lg border px-2 py-1"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </header>
  )
}
