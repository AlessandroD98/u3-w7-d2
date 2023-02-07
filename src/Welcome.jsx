import { Jumbotron, Button } from "react-bootstrap"


function Welcome () {
return (

<Jumbotron>
  <h1>Welcome!</h1>
  <p>
    This is your personal Book Shelf full of books of every type!
  </p>
  <p>
    <Button variant="primary">Start reading</Button>
  </p>
</Jumbotron>
)
}

export default Welcome;