import React from 'react'
import Forms from './Forms'
import { Container } from 'reactstrap';
import Axiosdelete from '../AxiosComponent/Axiosdelete';

const Contact =()=>{
    return(
        <div className="">
            <Container>
            <h2>Wecome to Contact Page</h2>
           <Forms/>  
          
            </Container>
           
        </div>
    )
}

export default Contact;