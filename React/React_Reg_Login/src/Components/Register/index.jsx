import React,{useState} from 'react';
import './index.css';

const Index = ({changeState}) => {
    const [Password, setPassword] = useState("")
    const [CPassword, setCPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")

    const handleLogin = (e) =>{
        e.preventDefault();
    }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={(e)=>{handleLogin(e)}}>
          <h1 className='login__head'>Register</h1>

          <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="Your Name" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>


            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="email" className="login__input" placeholder="Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>

            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Confirm Password" value={CPassword} onChange={(e)=>{setCPassword(e.target.value)}}/>
            </div>
            <button className="button login__submit">
              <span className="button__text">Register Me</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>				
          </form>
          <p className='register__text' onClick={changeState}>Sign in!</p>
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
