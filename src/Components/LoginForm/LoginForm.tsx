import React, { useEffect, useState } from 'react';
import Style from './LoginForm.module.css';
import GoogleLoginForm from '../GoogleLoginForm/GoogleLoginForm';
import axios from 'axios';
import Alerts from '../../Utils/Alerts/Alerts';

const LoginForm = () => {
  
  // Temporary
  const [responseStatus, setResponseStatus] = useState<any>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordInput, setPasswordInput] = useState("password");
  const [regForm, setRegForm] = useState(false);

  // Function to log in
  const authSubmit = (e:any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    axios.post('https://virbound.com/system/user/auth.php', {
      account_type: "direct",
      email: formJson['email'],
      password: formJson['password']
    })
    .then((response) => {
      console.log(response);
      if(!response.data.error) { 
        localStorage.setItem("access_token", response.data.access_token)
        window.location.reload()
      } else { setResponseStatus(<Alerts type="warning" message={response.data.status} />) }
    })
    .catch((error) => {
      console.log(error);
      <Alerts type="success" message={error} />
    });
  }

  // Function to register
  const regSubmit = (e:any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    formJson['password'] === formJson['password2'] ?
    axios.post('https://virbound.com/system/user/registration.php', {
      account_type: "direct",
      email: formJson['email'],
      password: formJson['password']
    })
    .then((response) => {
      console.log(response);
      if(!response.data.error) {
        localStorage.setItem("access_token", response.data.access_token)
        setResponseStatus(<Alerts type="success" message="Your account was created. Confirmation email was sent to you." />)
        setRegForm(false)
      } else { setResponseStatus(<Alerts type="warning" message={response.data.status} />) }
    })
    .catch((error) => {
      console.log(error);
      <Alerts type="success" message={error} />
    })
    :
    setResponseStatus(<Alerts type="warning" message="Passwords do not match!" />);
  }
  
  useEffect(() => {
    const clearResponses = setTimeout(() => {
      setResponseStatus("");
    }, 7000);
    return () => clearTimeout(clearResponses);
  }, [responseStatus]);

  return (
    !regForm ?
    <>
    {responseStatus}
    <form method="post" onSubmit={authSubmit} className={Style.form}>
      <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='EMail' required/>
      <div className={Style.passwordForm}>
      <input type={passwordInput} name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required/>
      <div className={`${Style.passwordHidder} ${Style[passwordInput]}`} onClick={() => passwordInput === 'password'?setPasswordInput('text'):setPasswordInput('password')}></div>
      </div>
      <button type="submit">Sign in</button>
    </form>
    <div className={Style.hr}></div>
    <button className={Style.register} onClick={() => setRegForm(true)}>Create new account</button>
    <GoogleLoginForm setResponseStatus={setResponseStatus} />
    </>
    :
    <>
    {responseStatus}
    <form method="post" onSubmit={regSubmit} className={Style.form}>
      <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='EMail' required/>
      <div className={Style.passwordForm}>
      <input type={passwordInput} name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required/>
      <div className={`${Style.passwordHidder} ${Style[passwordInput]}`} onClick={() => passwordInput === 'password'?setPasswordInput('text'):setPasswordInput('password')}></div>
      </div>
      <div className={Style.passwordForm}>
      <input type={passwordInput} name='password2' value={password2} onChange={e => setPassword2(e.target.value)} placeholder='Repeat password' required/>
      <div className={`${Style.passwordHidder} ${Style[passwordInput]}`} onClick={() => passwordInput === 'password'?setPasswordInput('text'):setPasswordInput('password')}></div>
      </div>
      <button type="submit">Register</button>
    </form>
    <div className={Style.hr}></div>
    <button className={Style.register} onClick={() => setRegForm(false)}>Back to sign in</button>
    </>
    
  );
}

export default LoginForm;
