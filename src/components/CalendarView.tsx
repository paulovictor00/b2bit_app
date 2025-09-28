import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useTranslation } from 'react-i18next'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'

const scheduleEvents = [
  { key: 'opening', date: '2025-09-17' },
  { key: 'projectEmail', date: '2025-09-22' },
  { key: 'projectDeadline', date: '2025-09-28' },
  { key: 'evaluation', start: '2025-09-29', end: '2025-10-04' },
  { key: 'results', date: '2025-10-03' },
  { key: 'technicalInterviews', start: '2025-10-06', end: '2025-10-09' },
  { key: 'cultureInterviews', start: '2025-10-09', end: '2025-10-11' },
  { key: 'winnersCalls', start: '2025-10-13', end: '2025-10-18' },
]

export default function CalendarView() {
  const { t, i18n } = useTranslation()

  const events = scheduleEvents.map(({ key, ...rest }) => {
    const title = t(`scheduleEvents.${key}`)
    return {
      ...rest,
      title,
      extendedProps: { detail: title },
    }
  })

  const calendarLocale = i18n.language.startsWith('pt') ? 'pt-br' : 'en'

  return (
    <div className="w-[92%] max-w-5xl rounded-2xl bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={calendarLocale}
        locales={[ptBrLocale]}
        events={events}
        buttonText={{ today: t('today') }}
        eventMouseEnter={(info) => {
          const title = info.event.extendedProps['detail'] as string
          const el = document.createElement('div')
          el.className = 'fc-tooltip'
          el.textContent = title
          el.style.position = 'absolute'
          el.style.background = '#022744'
          el.style.color = 'white'
          el.style.padding = '6px 10px'
          el.style.borderRadius = '10px'
          el.style.fontSize = '12px'
          document.body.appendChild(el)
          const move = (ev: MouseEvent) => {
            el.style.left = ev.pageX + 10 + 'px'
            el.style.top = ev.pageY + 10 + 'px'
          }
          move(info.jsEvent as unknown as MouseEvent)
          document.addEventListener('mousemove', move)
          info.el.addEventListener(
            'mouseleave',
            () => {
              document.removeEventListener('mousemove', move)
              el.remove()
            },
            { once: true },
          )
        }}
        height="auto"
      />
    </div>
  )
}
