import React from 'react'
import './login.css'
import img from './pets.jpeg'
import { Button } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Login() {
  const [passwordType,setPasswordType]=useState("password");
    const [passwordInput,setPasswordInput]=useState("");
    const handlePasswordType=(event)=>{
      setPasswordInput(event.target.value);
    }
    
    const [ConfpasswordType,setConfPasswordType]=useState("password");
    const [ConfpasswordInput,setConfPasswordInput]=useState("");
    const handleConfPasswordType=(event)=>{
      setConfPasswordInput(event.target.value);
    }

    const togglePassword=()=>{
      if(passwordType==="password")
      {
        setPasswordType("text")
        return;
      }
      setPasswordType("password");
    }
    
    const toggleConfPassword=()=>{
        if(ConfpasswordType==="password")
        {
          setConfPasswordType("text")
          return;
        }
        setConfPasswordType("password");
      }

  return (
    <><div class="card " style={{width: '60rem',
           color: 'red',
           height: '33rem',
        }}>
  
  <div className="photo">
    <img src={img} alt="reg img for login" className='imga' />
    <div className="login-form">
    <form action="">
    <h3 className='heading'>Register</h3>

    <div className="Username">
    <input type="text" placeholder="Username" />
    
    </div>
      <div className="Password">
      <input 
      type={passwordType}
      name="password"
      onChange={handlePasswordType} placeholder="Password" />
      <Button
      onClick={togglePassword}
      >
      <VisibilityIcon className="eyeIcon" />
      </Button>
      
      </div>
      <div className="Password">
      <input 
      type={ConfpasswordType}
      name="Confpassword"
      onChange={handleConfPasswordType} placeholder="Confirm Password" />
      <Button
      onClick={toggleConfPassword}
      >
      <VisibilityIcon className="eyeIcon" />
      </Button>
      
      </div>
  <div className="submitButton">
    <button type="submit" > Submit </button>
    </div>
    <div className="SignUp">
    <p>Already Have an account? <a href="/login">SignIn</a></p>
    </div>
        
    </form>
       </div>
  </div>
  
</div>


    </>
  )
}
