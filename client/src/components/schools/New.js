import React from 'react'
import SchoolForm from './Form'
import axios from 'axios'


class SchoolNew extends React.Component {  
    handleSubmit = (FormData) => {
        axios.post(`http://localhost:3050/schools`,FormData)
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            } else {
                this.props.history.push('/schools')
            }
        })

    }
    
    render(){
        return (
            <div>
                <h2>Add School</h2>
                <SchoolForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default SchoolNew