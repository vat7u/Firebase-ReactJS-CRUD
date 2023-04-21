import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Firebase/firebase'
import './login.scss'

function Login() {
    const [error,setError] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate
    
    const handleLogin = (e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/")
  })
  .catch((error) => {
    setError(error)
  });
    }
    return (
        <div className='login'>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" onChange={e=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="password" onChange={e=>{setPassword(e.target.value)}}/>
                <button type="submit">Login</button>
                {error && <span>Wrong email or password!</span>}
            </form>
        </div>
    )
}

export default Login
