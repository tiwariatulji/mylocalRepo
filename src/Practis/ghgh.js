import React from 'react';
import { FormGroup } from 'reactstrap';

const ghgh=()=>{

const handleonclick=()=>{
    console.log(e)
    e.preventDefault();

}


    return(
        <div>
        <h1>hello </h1>
        <form> 
            <label for="email" >Email</label>    
            <input type='email' name="email" placeholder="email" required/><br/>
           
           <label for="pass">password</label>
           <input type="password" name="password" placeholder="pass"/>
           <button >login</button>
            <a href="https://reactjs.org/docs/handling-events.html"onclick={handleonclick}>click here</a>
        
           
        </form>
        </div>
    )
}
export default ghgh;