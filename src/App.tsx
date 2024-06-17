import logo from './logo.svg'
import ThemeProvider from './shared/ThemeProvider/ThemeProvider'
import { AppHeader, Image } from './App.styles'
import { Home } from './Components/Home'

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <AppHeader>
        <Image src={logo} alt="logo" />
      </AppHeader>
      <Home />
    </ThemeProvider>
  )
}

export default App
