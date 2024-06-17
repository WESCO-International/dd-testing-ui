import { Container } from './Home.styles'

import { Text } from '../../App.styles'

const Home: React.FunctionComponent = () => {
  return (
    <Container data-testid="home-container" padding={'10px'}>
      <Text fontSize={10} fontWeight={6} padding={'10px'}>
        Sample on Styled system with goober
      </Text>
      <Text fontSize={2} padding={'10px'}>
        By Passing value to fontSize props as 2 will use the theme font size array index of 2
      </Text>
      <Text fontSize={5} padding={'10px'}>
        By Passing value to fontSize props as 5 will use the theme font size array index of 5
      </Text>
      <Text fontSize={[1, 2, 8]} padding={'10px'}>
        Similary passing an array to the styled props will generate responsive design, check this on responsive mode. Same goes for each and every
        component which is wrapped with styled-system
      </Text>
    </Container>
  )
}

export default Home
