import React from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'


class SchoolForm extends React.Component { 
    constructor(props) {
        console.log('form school constructor')
        super(props) 
        this.state = {
            name: props.school?props.school.name : '',
            email: props.school?props.school.email : '', 
            mobile: props.school?props.school.mobile : '',
            address: props.school?props.school.address:'',
            affiliationType: props.school? props.school.affiliationType: '',
            feeMinRange: props.school?props.school.feeMinRange:0 ,
            feeMaxRange: props.school?props.school.feeMaxRange:0 
        }
      
    }
    

    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({ 
            [e.target.name] : e.target.value 
        })
    }

    
    handleSubmit  = (e) => {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile,
            address : this.state.address,
            affiliationType : this.state.affiliationType,
            feeMinRange: this.state.feeMinRange,
            feeMaxRange: this.state.feeMaxRange
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }
    render() {
        console.log('form customer render')
        return (
            <div> 
                <Form onSubmit={this.handleSubmit}> 
                    <FormGroup>
                        <Label htmlFor="name">School Name</Label>
                        <Input type="text" id="name" value={this.state.name} onChange={this.handleChange} name="name" /> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">Adddress</Label>
                        <Input type="text" value={this.state.address} onChange={this.handleChange} name="address" />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="text"  id="email" value={this.state.email} onChange={this.handleChange} name="email" />
                    </FormGroup>
​
                    <FormGroup>
                        <Label htmlFor="mobile">Mobile</Label>
                        <Input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="feeMinRange">feeMinRange</Label>
                        <Input type="text" value={this.state.feeMinRange} onChange={this.handleChange} name="feeMinRange" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="feeMaxRange">feeMaxRange</Label>
                        <Input type="feeMaxRange" value={this.state.feeMaxRange} onChange={this.handleChange} name="feeMaxRange" />
                    </FormGroup>
                    
                    <FormGroup tag="fieldset">
        <legend>Priority</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" value="CBSE" checked= {this.state.affiliationType==="CBSE"} onChange={this.handleChange} name="affiliationType"/>{' '}
            CBSE
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" value="State" checked= {this.state.affiliationType==="State"} onChange={this.handleChange} name="affiliationType"/>{' '}
            State
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" value="ICSE" checked= {this.state.affiliationType==="ICSE"} onChange={this.handleChange} name="affiliationType"/>{' '}
            ICSE
          </Label>
        </FormGroup>
      </FormGroup>

​
                    <Button type="submit" value="submit" >Submit</Button>
                </Form> 
            </div>
        )
    }
}

export default SchoolForm 