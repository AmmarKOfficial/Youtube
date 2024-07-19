import React,{useState} from 'react';
import classes from './index.module.css';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth,} from '../../firebase'



const Index = ({changeState}) => {
    const [Password, setPassword] = useState("")
    const [CPassword, setCPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")

    const handleLogin = (e) =>{
        e.preventDefault();

  
  createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage);
  });

  }

  return (
    <div className={classes.container}>
      <div className={classes.screen}>
        <div className={classes.screen__content}>
          <form className={classes.login} onSubmit={(e)=>{handleLogin(e)}}>
          <h1 className={classes.login__head}>Register</h1>

          <div className={classes.login__field}>
              <input type="text" className={classes.login__input} placeholder="Your Name" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>


            <div className={classes.login__field}>
              <input type="email" className={classes.login__input} placeholder="Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>

            <div className={classes.login__field}>
              <input type="password" className={classes.login__input} placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

            <div className={classes.login__field}>
              <input type="password" className={classes.login__input} placeholder="Confirm Password" value={CPassword} onChange={(e)=>{setCPassword(e.target.value)}}/>
            </div>
            <button className={`${classes.button} ${classes.login__submit}`}>
              <span className={classes.button__text}>Register Me</span>
            </button>				
          </form>
          <p className={classes.register__text} onClick={changeState}>Sign in!</p>
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
