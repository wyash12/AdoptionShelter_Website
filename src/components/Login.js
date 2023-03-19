import React from 'react'
import './login.css'
import img from './pets.jpeg'
import { Button } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const history = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const renderErrorMessage = (name) =>
name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>
);
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
  const handleSubmit = async(event) => {
  
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    
    const userData = database.find((user) => user.username === uname.value);
  
   
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }

     
    
  }
  
  const [passwordType,setPasswordType]=useState("password");
    const [passwordInput,setPasswordInput]=useState("");
    const handlePasswordType=(event)=>{
      setPasswordInput(event.target.value);
    }
    
    const togglePassword=()=>{
      if(passwordType==="password")
      {
        setPasswordType("text")
        return;
      }
      setPasswordType("password");
    }

    const renderForm= (<div className="login-form">
    <form onSubmit={handleSubmit}>
    <h3 className='heading'>Login</h3>

    <div className="Username">
    <input type="text" placeholder="Username" name='uname' />
    {renderErrorMessage("uname")}
    
    </div>
      <div className="Password">
      <input 
      type={passwordType}
      name="pass"
      onChange={handlePasswordType} placeholder="Password" />
      <Button
      onClick={togglePassword}
      >
      <VisibilityIcon className="eyeIcon" />
      </Button>
      {renderErrorMessage("pass")}
      
      </div>
  <div className="submitButton">
    <button type="submit" > Submit </button>
    </div>
    <div className="SignUp">
    <p>Don't Have an account? <a href="/register">SignUp</a></p>
    </div>
        
    </form>
       </div>);
  
  return (
    <>
    <div class="card " style={{width: '60rem',
           color: 'red',
           height: '33rem',
        }}>
  
  <div className="photo">
    <img src={img} alt="reg img for login" className='imga' />
    {isSubmitted ? history("/"): renderForm}
  </div>
  
</div>


    </>
  )
}
