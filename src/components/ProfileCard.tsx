import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from 'react-i18next'

export default function ProfileCard() {
  const { user } = useAuth()
  const { t } = useTranslation()

  return (
    <div className="w-[92%] max-w-xl rounded-2xl bg-white p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      <p className="mb-3 text-slate-600">{t('profilePicture')}</p>
      <img
        src={user?.avatar || 'https://i.pravatar.cc/120'}
        alt="avatar"
        className="mx-auto h-16 w-16 rounded-lg object-cover"
      />

      <div className="mt-6 text-left">
        <p className="text-sm font-medium text-slate-700">{t('yourName')}</p>
        <div className="mt-1 w-full rounded-xl bg-slate-100 p-3">{user?.name || '-'}</div>
      </div>

      <div className="mt-4 text-left">
        <p className="text-sm font-medium text-slate-700">{t('yourEmail')}</p>
        <div className="mt-1 w-full rounded-xl bg-slate-100 p-3">{user?.email || '-'}</div>
      </div>
    </div>
  )
}
