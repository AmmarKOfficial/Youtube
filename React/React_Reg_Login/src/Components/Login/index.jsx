import React,{useState} from 'react';
import './index.css';

const Index = ({changeState}) => {
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const handleLogin = (e) =>{
        e.preventDefault();

        console.log(Email)
        console.log(Password)

        let validEmail = Email.trim()

        if(Password.length >= 8){
            console.log("Sab Thek hai")
        }else{
            console.log("Kuch To Garbar Hai")
        }
        setEmail("")
        setPassword("")
    }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={(e)=>{handleLogin(e)}}>
          <h1 className='login__head'>Login</h1>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="email" className="login__input" placeholder="Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>				
          </form>
          <p className='register__text' onClick={changeState} >Resgiter Me !</p>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>		
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>		
      </div>
    </div>
  );
}

export default Index;
