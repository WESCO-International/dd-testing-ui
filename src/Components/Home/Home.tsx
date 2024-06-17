import { Container } from './Home.styles'
import { Text } from '../../App.styles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

const Home: React.FunctionComponent = () => {
  const [name, setName] = useState('')
  const [data, setData] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/testing')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const callYourAPI = () => {
    if (name) {
      axios
        .get(`http://localhost:8080/testing/${name}`)
        .then(res => {
          setResponse(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <Container data-testid="home-container" padding={'10px'}>
      <Text fontSize={10} fontWeight={6} padding={'10px'}>
        <div>{data ? <pre>{data}</pre> : 'Loading...'}</div>{' '}
      </Text>
      <form>
        <label>
          Enter your value:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <Button type="submit" variant="success" onClick={() => callYourAPI()}>
          Submit
        </Button>
      </form>
      <div>
        <div>{response ? <pre>{response}</pre> : 'Loading...'}</div>{' '}
      </div>
    </Container>
  )
}

export default Home
