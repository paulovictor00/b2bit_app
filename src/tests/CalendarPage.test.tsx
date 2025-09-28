import { render, screen } from '@testing-library/react'
import CalendarView from '../components/CalendarView'

test('exibe calendário', () => {
render(<CalendarView/>)
expect(screen.getByText(/Abertura da vaga/)).toBeInTheDocument()
})