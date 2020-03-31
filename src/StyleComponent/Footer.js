import React, { Component } from 'react'

import { Col, Container, Row} from 'reactstrap';
import { Footers } from './Footers.css';

class FooterEx extends Component {
render() {
return (
            <Footers>
             <Container>
            <Row>
               <Col>Footer</Col>
              </Row>
          </Container>
          
         </Footers>
      
          )
      }
}
export default FooterEx;