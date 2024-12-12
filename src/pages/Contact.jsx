import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Contact() {
    return (
        <>
           <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/150px200" />
      <Card.Body>
        <Card.Title>MY PERSONAL CONTACT</Card.Title>
        <Card.Text>
        PHONE NUMBER:09158363435
        GMAIL:MPERFECTO@GBOX.NCF.EDU.PH
        ADDRESS:SAN FRANCISCO CALIFORNIA
        </Card.Text>
        <Button variant=""></Button>
      </Card.Body>
    </Card>
        
        </>
    )
}

export default Contact