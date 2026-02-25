import React, { useState } from 'react';
import styles from '../loginPage/Login.module.css'
import type { User } from '../../types/authTypes';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const {loggedInUsers,setLoggedInUsers} = useAuth();
  const [user,setUser] = useState<User>({
    email:'',
    password:'',
    token:false
  })

  const onchangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUser(prev=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }

  const onsubmitHandler = (e:React.SubmitEvent)=>{
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('SignedUsers')||"[]");
    const foundUser = users.find((el:User)=> el.email === user.email && el.password === user.password)
    
    if(foundUser){
      console.log("foundUSer===",foundUser)  
      const authUser = {...foundUser,token:true}
      localStorage.setItem('authUser',JSON.stringify(authUser))
      setLoggedInUsers(authUser);
      navigate('/dashboard')
    }
  }
  
  return (
           <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={onsubmitHandler}>
            <div className={styles.inputContainer}>
                <input type="email" placeholder="Email..." name = "email" onChange={onchangeHandler} value={user.email}/>
                <input type="text" placeholder="Password..." name = "password"  onChange={onchangeHandler} value={user.password}/>
                <button>Login</button>
            </div>
        </form>
        </div>
  )
}

export default Login;