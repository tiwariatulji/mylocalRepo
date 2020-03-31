import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input  } from 'reactstrap';



const Example = (props) => {

 onclick=()=>{
   alert('submit')
 }


  return (
    <Form>
      <Row form>
          <Col md={6}>
              <FormGroup>
                  <Label for='eaxampleName'>Name</Label>
                  <Input type ="Name" name='name' id="exampleNmae" placeholder='FullName'/>
              </FormGroup>
          </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      {/* <col mod={6}>
      <FormGroup>
        <Label for="psw-repeat"><b>Repeat Password</b></Label>
        <Input type="password" placeholder="repeate password" name="psw-repeat"/>
      </FormGroup>
      <col/> */}
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="Ahemdabad Gujarat"/>
      </FormGroup>
    
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        
    
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button onclick={onclick} >Sign Up</Button> 
      <a href="/sign-in" className="FormField__Link">I'm already member</a>
      <p>By Creating aacount you agree to our <a href='#'>terms &Privacy</a> </p>
    
 

    </Form>
  );
}
export default Example;
