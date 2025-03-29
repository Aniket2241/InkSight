import React, { useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
import Signup from "./Signup";
import Login from "./Login";

function HomePage(){
    const[showlogin,setshowlogin]=useState(true)

    
    return(

            <div className="homepage-main-container">
            
           
            {showlogin ? <Login showlogin={showlogin} setshowlogin={setshowlogin} /> : <Signup showlogin={showlogin} setshowlogin={setshowlogin}/>}

                
        </div>

    );
}

export default HomePage;    