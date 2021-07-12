import React from 'react';
import { SignInContainer ,SignInColumn,Form, Icon } from './SignInElements';
import { NavLogo } from '../Navbar/NavbarElements';
import emblem from '../../images/preview.jpg';

const SignIn = () => {
    return (
        <>
        <SignInContainer id="/sign-in">
            <Icon Link to="/">
                 <img class="logo-img" src={emblem} alt="logo"></img>
                    <h4 style={{paddingLeft: 10, color: "white"}}>NUJMOSITY<sup style={{fontSize: "small"}}>&#xae;</sup>
                    </h4>
                    <h5 style={{paddingLeft: 10, color: "white"}}>Go to Home Page</h5>
                    <NavLogo/>
                    </Icon>
            <Form action="#">
        
              <SignInColumn>
                  <h3>Register / Sign-in to an existing account</h3>
                  <br/>

                  <button type="button" className="form-btn">Login with Google Account</button>
                  <button type="button" className="form-btn">Login with Facebook</button>
                  <button type="button" className="form-btn">Login with Twitter</button>
              </SignInColumn>
              <SignInColumn>
                  <p>Sign In Manually</p>
                      <input type="text" name="username" placeholder="Username" required></input>
                      <input type="password" name="password" placeholder="Password" required></input>
                      <input type="submit" value="Login"></input>
              </SignInColumn>  
            
        
                     <SignInColumn>
                         <button type="button" className="form-btn">Sign Up</button>
                     
                         <button type="button" className="form-btn">Forgot Password?</button>
                    
                         <button type="button" className="form-btn">Need assistance?</button>
                     </SignInColumn>
            
         </Form>
        </SignInContainer>
         
             
                 
             
             
         
        </>
    )
}

export default SignIn;
