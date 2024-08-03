import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Image4 from './images/Image4.jpg';
import Image5 from './images/Image5.jpg';
import Image6 from './images/Image6.jpg';
import { useNavigate } from "react-router-dom";
export default function Card1()
{
  const Navigate=useNavigate();
  const handleButton=()=>{
    Navigate('/CustomerLogin');
    }

  // const handleButtonChange=()=>{
  //   Navigate('/Login')
  // }  
    return(
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Image4} style={{height:'35vh' }}/>
        <Card.Body>
          <Card.Title>"Bike Service"</Card.Title>
          <Card.Text>
          All you need to do is book an online bike repair service in India through Autoace or website and get your bike servicing time fixed online.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-primary" onClick={handleButton}>Book Now..</Button>{' '}
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {Image5} style={{height:'35vh' }} />
        <Card.Body>
          <Card.Title>" Register Service Center"</Card.Title>
          <Card.Text>
          There is no need for you to search for expert mechanics and technicians as we have arranged that for you through our website.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-primary">Register Now..</Button>{' '}
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image6} style={{height:'35vh' }} />
        <Card.Body>
          <Card.Title>"Trusted Staff"</Card.Title>
          <Card.Text>
          We have an assorted range of well-trained auto experts who are experienced in offering the best quality Bike Service Online in India.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-primary">Use it..</Button>{' '}
        </Card.Footer>
      </Card>
    </CardGroup>
    )
}