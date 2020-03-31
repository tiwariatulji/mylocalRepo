

import React, { Component } from 'react'
import { Container ,Row,Col} from "reactstrap";
import {Headers} from "./Headers.css";

  class  HeaderEx extends Component {
    render() {
      return (
                 <Headers>
                   <Container>
                  <Row>
                  <Col>THIS IS HEADER</Col>
                    </Row>
                </Container>
                
              </Headers>
            
                )
            }
      }

export default HeaderEx;
;