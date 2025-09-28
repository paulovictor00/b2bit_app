import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import ErrorDialog from './ErrorDialog'
import logoFull from '../assets/b2bit-logo.png'

export default function LoginForm() {
  const { login, loading } = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Email inválido').required('Obrigatório'),
      password: Yup.string().min(4).required('Obrigatório'),
    }),
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password)
        navigate('/profile')
      } catch {
        setError(true)
      }
    },
  })

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md rounded-[32px] bg-white px-10 py-12 shadow-[0_35px_70px_rgba(2,39,68,0.18)]"
      >
        <div className="mb-9 flex justify-center">
          <img
            src={logoFull}
            alt="b2bit"
            className="w-full max-w-[360px] object-contain"
          />
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
              {t('email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="@gmail.com"
              className="mt-2 w-full rounded-2xl bg-slate-100 px-4 py-3 text-slate-700 outline-none transition focus:bg-white focus:ring-2 focus:ring-[#022744]/20 placeholder:text-slate-400"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700" htmlFor="password">
              {t('password')}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="*******************"
              className="mt-2 w-full rounded-2xl bg-slate-100 px-4 py-3 text-slate-700 outline-none transition focus:bg-white focus:ring-2 focus:ring-[#022744]/20 placeholder:text-slate-400"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-[18px] bg-[#022744] py-3.5 text-lg font-semibold text-white shadow-[0_14px_30px_rgba(2,39,68,0.25)] transition focus:outline-none focus:ring-2 focus:ring-[#022744]/30 hover:translate-y-[1px] hover:shadow-[0_12px_24px_rgba(2,39,68,0.22)] disabled:translate-y-0 disabled:shadow-none disabled:opacity-70"
        >
          {t('signIn')}
        </button>
      </form>

      <ErrorDialog
        open={error}
        title={t('loginErrorTitle')}
        description={t('loginErrorDesc')}
        onClose={() => setError(false)}
      />
    </>
  )
}
