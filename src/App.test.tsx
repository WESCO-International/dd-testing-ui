import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders home component', () => {
  render(<App />)
  const homeContainer = screen.getByTestId('home-container')
  expect(homeContainer).toBeInTheDocument()
})

test('render link to learn react', () => {
  render(<App />)
  const learnTextElement = screen.getByTestId('learn-react')
  expect(learnTextElement).toBeInTheDocument()
})

test('render link to learn learn goober', () => {
  render(<App />)
  const learnTextElement = screen.getByTestId('learn-goober')
  expect(learnTextElement).toBeInTheDocument()
})

test('render link to learn learn styled components', () => {
  render(<App />)
  const learnTextElement = screen.getByTestId('learn-styled-system')
  expect(learnTextElement).toBeInTheDocument()
})
