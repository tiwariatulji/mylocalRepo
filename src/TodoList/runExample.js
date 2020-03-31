import React, { Component } from 'react'
import { Button, Form,  Label,Input } from 'reactstrap';
import styled from 'styled-components'


const AppWrapper = styled.div`
text-align:center;`

export default class runExample extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <AppWrapper>
            <div>
            <Form className="form-singin " > 
            <div className="form-label-group">
                
                <Label for="Email Address">Email Id</Label>
                <Input type="text" placeholder="Email Address" className="form-control" required autoFocus/>
                </div>
                <div className="form-label-group">
                 <Label for="Password">Password</Label>
                <Input type="text" placeholder="Password" className="form-control" required autoFocus/>
                </div>
               <Label for="checkBox">Remeber me</Label>
               <Input type="CheckBox">Remeber Me</Input>
               <Button value="submit" className="button" >Login Me</Button>
               <p className="" > © 2020-2021</p>
            </Form>
            </div>
            </AppWrapper>
        )
    }
}
