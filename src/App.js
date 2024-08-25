import React from "react";
import { useState , useEffect } from "react";
import './login.css'


function Logindiv(){
  return(
    <>
    <div className="loginconatiner">
      <div className="loginbox">
         <h1>login Form</h1>
         <form>
          <div>
          <label>Name</label> 
          <input id="password" name="name" type="text" defaultValue="John Doe" />
          </div>
          <div>
          <label>email</label> 
          <input id="password" name="email" type="email" defaultValue="Johndoe@emial.xyz" />
          </div>
          <div>
          <label>Password</label> 
          <input id="password" name="password" type="password" defaultValue="password" />
          </div>
        
         </form>

      </div>
  
    </div>
    </>
  )
}


function Maindiv(){
  return(
    <>
    <div>
      <Logindiv />
    </div>

    </>
  )
}

export default Maindiv