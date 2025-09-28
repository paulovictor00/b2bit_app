import '@testing-library/jest-dom'
import React from 'react'
import { TextDecoder, TextEncoder } from 'util'
import './src/lib/i18n'

if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder
}

if (!globalThis.TextDecoder) {
  globalThis.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder
}

jest.mock('@fullcalendar/react', () => {
  return {
    __esModule: true,
    default: ({ events }: { events?: Array<{ title?: string }> }) =>
      React.createElement(
        'div',
        { 'data-testid': 'fullcalendar-mock' },
        events?.map((event, index) =>
          React.createElement('span', { key: index }, event.title),
        ),
      ),
  }
})

jest.mock('@fullcalendar/daygrid', () => ({ __esModule: true, default: () => ({}) }))

jest.mock('@fullcalendar/interaction', () => ({ __esModule: true, default: () => ({}) }))
