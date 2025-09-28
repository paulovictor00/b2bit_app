import React from 'react'
import Navbar from '../components/Navbar'
import CalendarView from '../components/CalendarView'

export default function CalendarPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <div className="flex flex-1 items-center justify-center bg-slate-50 pt-12">
        <div className="w-full max-w-5xl">
          <CalendarView />
        </div>
      </div>
    </div>
  )
}
