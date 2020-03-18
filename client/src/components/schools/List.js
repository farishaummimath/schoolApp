import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Table,Button } from 'reactstrap'



class SchoolList extends React.Component {
    
    constructor(){
        super()
        this.state = {
            schools : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3050/schools')
        .then(response => {
            const schools =response.data
            this.setState({schools})
        })

    }
    handleRemove(id) {
        axios.delete(`http://localhost:3050/schools/${id}`)
        .then(response =>{
            console.log(response.data)
            this.setState(prevState => ({
                schools : prevState.schools.filter(school => school._id !== response.data._id)
            }))
        })
        .catch(err => alert(err))
    }
     


    render() {
        return (
            <div>
                <h2>Schools - {this.state.schools.length}</h2>

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Affiliation</th>

                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.schools.map((school,index)=>{
                            return (
                                <tr key ={school._id}> 
                                    <td>{index+1}</td>
                                    <td>{school.name}</td>
                                    <td>{school.email}</td>
                                    <td>{school.mobile}</td>
                                    <td>{school.affiliationType}</td>
                                    <td>
                                        <Link to={`/schools/${school._id}`}>
                                        <Button color="info">show</Button></Link>
                                        </td>
                                    <td>
                                        <Button color="danger" onClick={()=>{
                                            this.handleRemove(school._id)
                                            }}>remove</Button></td>
                                            
                                </tr>
                            )
                            
                        })}
                    </tbody>
                
                </Table>

                <Link to="schools/new" className="btn btn-primary">Add School</Link>
            </div>
        )
    }

}


export default SchoolList