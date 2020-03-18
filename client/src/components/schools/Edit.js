import React from 'react'
import SchoolForm from './Form'
import axios from 'axios'


 class SchoolEdit extends React.Component{
    
    constructor() {
        console.log('edit constructor')
        super()
        this.state = {
            school : {}
        }
    }

    handleSubmit = (FormData) =>{
        console.log('handle')
        axios.put(`http://localhost:3050/schools/${this.props.match.params.id}`,FormData)
        .then(response => {
            const school = response.data
            this.setState({school})
            this.props.history.push(`/schools/${school._id}`)
        })
        .catch(err=> alert(err))

    }

    componentDidMount(){
        console.log('edit componentDidMount')

        const id = this.props.match.params.id
        console.log(id)
        axios.get(`http://localhost:3050/schools/${id}`)
        .then(response =>{
            const school = response.data
            this.setState({school})
        })
        .catch(err=>{
            console.log(err)
            alert(err)})
    }
    render(){
        return (
            <div>
                {this.state.school && (
                    <div>
                    <h2>Edit School</h2>
                     {this.state.school.name && <SchoolForm school = {this.state.school} handleSubmit = {this.handleSubmit} />}
                    </div>
                )}
                    
            </div>
        )}
}
export default SchoolEdit
