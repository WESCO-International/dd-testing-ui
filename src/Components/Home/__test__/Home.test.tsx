import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../../shared/ThemeProvider'
import { Home } from '../'

test('renders learn get ', () => {
  render(
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
  const sampleText = screen.getByText('Sample on Styled system with goober')
  expect(sampleText).toBeInTheDocument()
})
