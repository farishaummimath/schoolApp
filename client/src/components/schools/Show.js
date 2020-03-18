import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import { Col, Row } from 'reactstrap'

class SchoolShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            school: []
        }
    }
    
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3050/schools/${id}`)
        .then(response=>{
            console.log(response.data)
            this.setState({school:response.data}) 
    
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render(){
        return(
            <div className="mt-3">
                {this.state.school && (
                    <>
                    <h1>School Details</h1>
                    <Row>
                    <Col>
                         <h3>School Name: {this.state.school.name} - {this.state.school.email}</h3>
                    </Col> 
                    </Row>
                    <Row>
                        <Col>
                        <h3> mobile:{this.state.school.mobile} </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h3> Address:- {this.state.school.address}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h3> Fee Range:- {this.state.school.feeMinRange} - {this.state.school.feeMaxRange}</h3>
                        </Col>
                    </Row>
                    <Link to={`/schools/edit/${this.state.school._id}`}> <h3>Edit Details</h3> </Link>

                    </>
                   

                )}
                
            </div>
        )
    }
}


export default SchoolShow