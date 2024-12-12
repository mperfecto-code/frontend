import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Education() {
    return (
        <>
           <h1>Education </h1>
           <h1></h1>
           <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '100px'}}>
           <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/291890406_100502749405263_6511804075043374366_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EYF592bQxRQQ7kNvgH7ONS_&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AEjp_TjXyZAsxZPTwwPgjBX&oh=00_AYBw4TQRlC_7tqlb4G9zpWIwAYMd3CZMnf_XsesDa_LvXQ&oe=675721F7" />
            <Card.Body>
                <Card.Title>Minalabac Central School</Card.Title>
                <Card.Text>
                
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://scontent.fmnl8-5.fna.fbcdn.net/v/t39.30808-6/305102537_556770199582902_2685708145361050799_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ggd4Z1W-DfYQ7kNvgHp62LV&_nc_zt=23&_nc_ht=scontent.fmnl8-5.fna&_nc_gid=A-y0Z84i-viJpHFl-FATkF0&oh=00_AYA_HCAsi1qp3kmQMFA6OrWCSkVFVinKINCc0D6eiRO-Gw&oe=67570457" />
            <Card.Body>
                <Card.Title>Minalabac National High School</Card.Title>
                <Card.Text>

                </Card.Text>

            </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://aims.ncf.edu.ph/assets/images/ncfi-logo.png" />
            <Card.Body>
                <Card.Title>Naga College Foundation, Inc.</Card.Title>
                <Card.Text>
                
                </Card.Text>
            </Card.Body>
            </Card>
            </Row>

        </>
    )
}

export default Education