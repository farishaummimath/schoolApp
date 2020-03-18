import React from 'react'
import  {Container, Row, Col} from 'reactstrap'
function Home(props){
    return(
        <Container>
                <Row>
                    <Col md="6">
                        <h2 className="mb-5">Welcome To The School  App</h2>
                    </Col>
                </Row>
        </Container>
    )
}
export default Home
