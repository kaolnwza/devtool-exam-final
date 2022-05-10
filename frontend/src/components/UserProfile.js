import { Card, Button, Row, Col } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const UserProfile = () => {
    const [user, setUser] = useState({})
    const [chooseType, setChooseType] = useState('Unpaid')
    const [product, setProduct] = useState([])
    const [transaction, setTransaction] = useState('')
    const [fuck, setFuck] = useState(false)
    const [chooseRole, setChooseRole] = useState('customer')





    return (
        <>
            <Card
                className="justify-content-md-center"
                style={cardStyle}
                border="light">
                <Card.Body>
                    <Row>
                        <Col md={4} >
                            <Card style={cardStyle_inside_left} >
                                <Card.Body className="text-center">
                                    <Row >
                                        <Col >

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <Card.Title style={userTitleStyle}></Card.Title>
                                            <Link to="/editprofile">
                                                <Button variant="outline-primary" style={buttonPathStyle}>Edit Profile</Button>
                                            </Link>
                                            <div />
                                            <Link to="/myproduct">
                                                <Button variant="outline-primary" style={buttonPathStyle}>My Product</Button>
                                            </Link>
                                            <div>
                                                <Button variant="outline-primary" style={buttonPathStyle}>My Transaction</Button>
                                            </div>
                                            <div>
                                                <Button variant="outline-primary" style={buttonPathStyle} >Customer Transaction</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>





                    </Row>
                </Card.Body>
            </Card >
        </>
    )
}

const buttonTypeStyle = {
    marginRight: 10,
    width: 165

}
const buttonPathStyle = {
    marginTop: 10,
    width: 200
}

const cardStyle = {
    width: '100%',

    marginTop: 40,
    backgroundColor: '#FAFAFA'
}

const imageStyle = {
    height: 240,
    width: 240
}

const cardStyle_inside_left = {
    paddingTop: 20,
    marginTop: 20,
    marginLeft: 15,
    width: 330,
    height: 550
}
const cardStyle_inside_right = {
    marginTop: 20,
    width: 740,

}

const userTitleStyle = {
    fontSize: 25,
    marginTop: 15
}

const userHeader = {
    backgroundColor: 'white',
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 43,
    paddingTop: 12,
    paddingBottom: 12
}

const hrStyle = {
    marginTop: 20,
    marginBottom: 20
}

const spanStyleLeft = {
    paddingLeft: 30,
    fontWeight: 500
}

const spanStyleRight = {
    paddingLeft: 20,
    fontWeight: 500
}
export default UserProfile;