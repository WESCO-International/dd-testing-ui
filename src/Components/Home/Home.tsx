import { Container } from './Home.styles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'

const Home: React.FunctionComponent = () => {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])
  const [msg, setMsg] = useState('')
  const [validated, setValidated] = useState<boolean>(false)

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

  useEffect(() => {
    axios
      .get('http://localhost:8080/user')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }
    setValidated(false)

    const formData = new FormData(event.target)
    axios
      .post(`http://localhost:8080/user`, {
        userName: formData.get('username'),
        password: formData.get('password'),
      })
      .then(res => {
        setMsg('User ' + res.data.userName + ' created successfully')

        axios
          .get('http://localhost:8080/user')
          .then(response => {
            setUsers(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      })
  }

  http: return (
    <Container data-testid="home-container" padding={'10px'}>
      <Card>
        <Card.Body>{data}</Card.Body>
      </Card>
      <br></br>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Create User</Card.Title>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Username</Form.Label>
                  <Form.Control required name="username" type="text" placeholder="username" />
                  <Form.Control.Feedback type="invalid">Username is required</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>password</Form.Label>
                  <Form.Control required name="password" type="password" placeholder="password" />
                  <Form.Control.Feedback type="invalid">Password is required </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2" style={{ textAlign: 'center' }}>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              <div className="mt-2 ml-1 text-success">{msg}</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <ListGroup as="ol" numbered>
                {users.map((user: any) => (
                  <ListGroup.Item key={user.id} as="li">
                    {user.id} | {user.userName} | {user.password}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
