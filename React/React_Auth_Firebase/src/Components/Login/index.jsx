import React,{useState} from 'react';
import  classes from './index.module.css';

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";

const Index = ({changeState}) => {
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();

signInWithEmailAndPassword(auth, Email, Password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  navigate("/home");
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;

  console.log(errorMessage,errorCode);
});
    }

  return (
    <div className={classes.container}>
      <div className={classes.screen}>
        <div className={classes.screen__content}>
          <form className={classes.login} onSubmit={(e)=>{handleLogin(e)}}>
          <h1 className={classes.login__head}>Login</h1>
            <div className={classes.login__field}>
              <input type="email" className={classes.login__input} placeholder="Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className={classes.login__field}>
              <input type="password" className={classes.login__input} placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button className={`${classes.button} ${classes.login__submit}`}>
              <span className={classes.button__text}>Log In Now</span>
            </button>				
          </form>
          <p className={classes.register__text} onClick={changeState} >Resgiter Me !</p>
        </div>
        <div className={classes.screen__background}>
          <span className={`${classes.screen__background__shape} ${classes.screen__background__shape4}`}></span>
          <span className={`${classes.screen__background__shape} ${classes.screen__background__shape3}`}></span>		
          <span className={`${classes.screen__background__shape} ${classes.screen__background__shape2}`}></span>
          <span className={`${classes.screen__background__shape} ${classes.screen__background__shape1}`}></span>
        </div>		
      </div>
    </div>
  );
}

export default Index;
