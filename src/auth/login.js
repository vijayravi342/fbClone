import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import {auth, provider} from "../fbConfig"
import { useStateValue } from '../Stateprovider'
import { actionTypes } from '../Reducer'

function Login() {
      
    const[state, dispatch] = useStateValue();


     const signIn=()=>{
          auth.signInWithPopup(provider).then((result)=>{
              
              dispatch({
               type: actionTypes.SET_USER,
               user: result.user,
             })
          })
           .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">

        <div className="login__logo">
            <img src="https://www.santaanita.com/wp-content/uploads/2020/05/facebooklogo.png" alt=""/>
            <img src="https://about.fb.com/wp-content/uploads/2019/11/FB_Newsroom_Social.png?fit=1200%2C628" alt=""/>
        </div>
        <Button type="submit" onClick={signIn}>SignIn</Button>
            
        </div>
    )
}

export default Login
