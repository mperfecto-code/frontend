import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import home from '../assets/miks.jpg';
import ListGroup from 'react-bootstrap/ListGroup';

function About() {
    return (
        <>
            <h1 style={{color: 'BLACK '}}>About Me</h1>
            <Container>
                {/* Display the image with alignment to the left */}
                <Row className="justify-content-start">
                    <Col xs={6} md={4}>
                        <Image src={home} roundedCircle width="300" height="300" />
                    </Col>
                </Row>
            </Container>
            {/* List of details */}
            <ListGroup>
                <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>Name:</strong>Mikkie B. Perfecto</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>Birth Date:</strong>April 25, 2005</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>Age:</strong>19</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>Gender:</strong>Male</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: 'transparent'}}></ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>My Skill:</strong></ListGroup.Item>
            </ListGroup>
            <img src='https://github.blog/wp-content/uploads/2024/07/github-logo.png' width={300} />
            <img src='https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_480,h_240/https://ubuntu.com/wp-content/uploads/c9f4/visualstudio_code-card.png' width={300} />
            <img src='https://th.bing.com/th/id/OIP.dKGi3rGvNNgWVdiMz7u7OAHaD4?rs=1&pid=ImgDetMain' width={300} />
            <img src='https://www.oracle.com/oce/dc/assets/CONTB8D14F414BEE4A5F8C5F59EFF1706D19/native/eloquabannerred512x288.jpg' width={300} />
        </>
    );
}

export default About;
