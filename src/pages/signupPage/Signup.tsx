import styles from "./Signup.module.css";
import {useAuth} from "../../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = ()=>{
    const navigate = useNavigate();
    const {signedUpUsers,setsignedUpUsers} = useAuth(); 
    const [user,setUser] = useState({
        email:'',
        password:'',
        token:false
    })
    const onchangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser(prev=>{
            return {...prev,[e.target.name]:e.target.value};
        })
    }

    const onsubmitHandler = (e:React.SubmitEvent)=>{
        e.preventDefault();
        setsignedUpUsers(prev=>{
            return [...prev,user]
        })
        localStorage.setItem('SignedUsers',JSON.stringify([user]))
        console.log("signedUp users ===",signedUpUsers)
        navigate('/login');
    }
    return(
        <div className={styles.formContainer}>

        <form className={styles.form} onSubmit={onsubmitHandler}>
            <div className={styles.inputContainer}>
                <input type="email" placeholder="Email..." name = "email" onChange={onchangeHandler} value={user.email}/>
                <input type="text" placeholder="Password..." name = "password"  onChange={onchangeHandler} value={user.password}/>
                <input type="text" placeholder="Confirm Password" />
                <button>Sign Up</button>
            </div>
        </form>
        </div>
    )
}

export default Signup;