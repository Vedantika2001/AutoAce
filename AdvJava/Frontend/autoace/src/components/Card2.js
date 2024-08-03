import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card2() {
  return (
    <Card style={{display:'flex' , textAlign:'center'}}>
      <Card.Header as="h5">"AutoAce an online bike repair service in India"</Card.Header>
      <Card.Body>
        <Card.Title>Special treatment for your bike..</Card.Title>
        <Card.Text>
        “A bike is like a good friend, it’s always there when you need it.” 
        </Card.Text>
        <Button variant="outline-primary" href="/about">About Us..</Button>{' '}
      </Card.Body>
    </Card>
  );
}
