import { Component } from "react";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";
import fantasy from "./JsonFile/fantasy.json"
import history from "./JsonFile/history.json"
import horror from "./JsonFile/horror.json"
import romance from "./JsonFile/romance.json"
import scifi from "./JsonFile/scifi.json"

class Allthebook extends Component {
    render(){
        return (

        <main>           
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Fantasy
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Row>
            {fantasy.map(book =>(
            <Col xs={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} style={{ width: '286px' }}/>
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <p>{book.price}€</p>
  </Card.Body>
</Card>
</Col>
           ))} 
                </Row>
          </Accordion.Collapse>
        </Card>
      </Accordion>
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              History
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Row>
            {history.map(book =>(
            <Col xs={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} style={{ width: '286px' }}/>
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <p>{book.price}€</p>
  </Card.Body>
</Card>
</Col>
           ))} 
                </Row>
          </Accordion.Collapse>
        </Card>
      </Accordion>
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Horror
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Row>
            {horror.map(book =>(
            <Col xs={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} style={{ width: '286px' }}/>
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <p>{book.price}€</p>
  </Card.Body>
</Card>
</Col>
           ))} 
                </Row>
          </Accordion.Collapse>
        </Card>
      </Accordion>
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Romance
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Row>
            {romance.map(book =>(
            <Col xs={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} style={{ width: '286px' }}/>
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <p>{book.price}€</p>
  </Card.Body>
</Card>
</Col>
           ))} 
                </Row>
          </Accordion.Collapse>
        </Card>
      </Accordion>
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Scifi
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Row>
            {scifi.map(book =>(
            <Col xs={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} style={{ width: '286px' }}/>
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <p>{book.price}€</p>
  </Card.Body>
</Card>
</Col>
           ))} 
                </Row>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </main> 
        )
    }
}

export default Allthebook