import React, { useState } from 'react';
import Style from './LoginForm.module.css';
import GoogleLoginForm from '../GoogleLoginForm/GoogleLoginForm';
import axios from 'axios';

const LoginForm = () => {

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
      } else { setResponseStatusAuth(response.data.status) }
    })
    .catch((error) => {
      console.log(error);
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
      } else { setResponseStatusReg(response.data.status) }
    })
    .catch((error) => {
      console.log(error);
    })
    :
    setResponseStatusReg("Passwords do not match.")
  }
  
  // Temporary
  const [responseStatusAuth, setResponseStatusAuth] = useState("");
  const [responseStatusReg, setResponseStatusReg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordInput, setPasswordInput] = useState("password");
  const [regForm, setRegForm] = useState(false);

  return (
    !regForm ?
    <>
    <form method="post" onSubmit={authSubmit} className={Style.form}>
      <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='EMail' required/>
      <input type={passwordInput} name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' required/>
      <button type="button" onClick={() => passwordInput === 'password'?setPasswordInput('text'):setPasswordInput('password')}>👁️</button>
      <button type="submit">Sign in</button>
    </form>
    <div className={Style.hr}></div>
    <GoogleLoginForm setResponseStatus={setResponseStatusAuth} />
    <button onClick={() => setRegForm(true)}>New to Virbound? Join now</button>
    <div>{responseStatusAuth}</div>
    </>
    :
    <>
    <form method="post" onSubmit={regSubmit} className={Style.form}>
      <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='EMail' required/>
      <input type={passwordInput} name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' required/>
      <input type={passwordInput} name='password2' value={password2} onChange={e => setPassword2(e.target.value)} placeholder='Пароль' required/>
      <button type="button" onClick={() => passwordInput === 'password'?setPasswordInput('text'):setPasswordInput('password')}>👁️</button>
      <button type="submit">Register</button>
    </form>
    </>
    
  );
}

export default LoginForm;
