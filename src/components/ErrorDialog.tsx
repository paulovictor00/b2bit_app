import React from 'react'

interface Props {
open: boolean
title: string
description: string
onClose: () => void
}

export default function ErrorDialog({ open, title, description, onClose }: Props) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40" role="dialog" aria-modal>
      <div className="w-[90%] max-w-md rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
        <div className="rounded-t-2xl px-6 py-4" style={{ background: '#022744' }}>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        <div className="p-6">
          <p className="text-slate-700">{description}</p>
          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl py-3 font-semibold text-black"
            style={{ background: '#FDCF00' }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
