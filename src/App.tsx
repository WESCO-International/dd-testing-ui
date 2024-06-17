import logo from './logo.svg'
import ThemeProvider from './shared/ThemeProvider/ThemeProvider'
import { AppHeader, Link, Image, Text } from './App.styles'
import { Home } from './Components/Home'

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <AppHeader>
        <Image src={logo} alt="logo" />
      </AppHeader>
      <Home />
      <Text padding={'10px'} fontSize={4}>
        For ref #
      </Text>
      <Link data-testid="learn-react" padding="5px" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React,
      </Link>
      <Link data-testid="learn-goober" padding="5px" href="https://goober.js.org" target="_blank" rel="noopener noreferrer">
        Learn Goober,
      </Link>
      <Link data-testid="learn-styled-system" padding="5px" href="https://styled-system.com" target="_blank" rel="noopener noreferrer">
        Learn Styled System
      </Link>
    </ThemeProvider>
  )
}

export default App
