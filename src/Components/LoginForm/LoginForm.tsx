import React, { useState } from 'react';
import Style from './LoginForm.module.css';
import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const handleSubmit = (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Getting data from API:
    // fetch('/some-api', { method: form.method, body: formData });

    const formJson = Object.fromEntries(formData.entries());
    setCookie('login',formJson['login'], {maxAge:2628000});
    setCookie('password',formJson['password'], {maxAge:2628000});
  }

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInput, setPasswordInput] = useState("password");

  const [cookies, setCookie, removeCookie] = useCookies(['login','password']);

  return (
    <div>
    <form method="post" onSubmit={handleSubmit} className={Style.form}>
      <input type="text" name='login' value={login} onChange={e => setLogin(e.target.value)} placeholder='Логін'/>
      <input type={passwordInput} name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль'/>
      <div onClick={() => passwordInput === 'password'?setPasswordInput('text'):setPasswordInput('password')}>👁️</div>
      <button type="submit">Спробуємо залогінитись ➜</button>
    </form>
    Ваш логін: {cookies['login']?cookies['login']:'не встановлено'}. <br/>
    Ваш пароль: {cookies['password']?cookies['password']:'не встановлено'}.
    </div>
  );
}

export default LoginForm;
