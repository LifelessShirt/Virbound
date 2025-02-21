import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../../Components/Button/Button';
import { Subtitle } from '../../Components/Subtitle/Subtitle';
import './User.css';
import { Title } from '../../Components/Title';
import axios from 'axios';
import Alerts from '../../Utils/Alerts/Alerts';
import { randomInt } from 'crypto';

const UserSettings = (
    user: {"error": Boolean,"name": String,"email": String,"avatarColor": String,"avatarIcon": String,"badges": String,"status": String}, 
    userInfo:{"avatarColor":String, "avatarIcon":String,"name":String},
    setUserInfo:Dispatch<SetStateAction<{
        avatarColor: String;
        avatarIcon: String;
        name: String;
    }>>,
    changeUserInfoStatus:any,
    setChangeUserInfoStatus:Dispatch<any>
    ) => {

    // Change user avatar or name
    const changeUserInfo = (type:string) => {
        axios.post('https://virbound.com/system/user/settings.php', {
            access_token: localStorage.getItem("access_token"),
            email: user['email'],
            type: type
          })
          .then((response) => {
            console.log(response);
            if(!response.data.error) {
                setChangeUserInfoStatus(<Alerts key={Math.random()} type="success" message={response.data.status} />)
                setUserInfo({"avatarColor":`${response.data.avatarColor}`, "avatarIcon":`${response.data.avatarIcon}`,"name":`${response.data.name}`});
            } else { setChangeUserInfoStatus(<Alerts key={Math.random()} type="warning" message={response.data.status} />) }
          })
          .catch((error) => {
            console.log(error);
            setChangeUserInfoStatus(<Alerts key={Math.random()} type="warning" message="Server error. Try again leter." />)
          })
    }

    // Change user password or other
    const changeUserSubmit = (e:any) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        if (formJson['newPassword'] === formJson['newPassword2']) {
            console.log(formJson['newPassword'] != '' ? formJson['newPassword'] : 'null')
            axios.post('https://virbound.com/system/user/settings.php', {
                access_token: localStorage.getItem("access_token"),
                email: user['email'],
                type: 'overall',
                password: `${formJson['newPassword'] != '' ? formJson['newPassword'] : 'null'}`
            })
            .then((response) => {
              console.log(response);
              if(!response.data.error) {
                setChangeUserInfoStatus(<Alerts key={Math.random()} type="success" message='Changes saved' />);
                // Delete access_token if user changes password
                if (formJson['newPassword'] != "") {
                    localStorage.removeItem("access_token");
                }
                setTimeout(() => window.location.reload(), 3000);
              } else { setChangeUserInfoStatus(<Alerts key={Math.random()} type="warning" message={response.data.status} />) }
            })
            .catch((error) => {
              console.log(error);
              <Alerts type="success" message={error} />
            })
        } else {
            setChangeUserInfoStatus(<Alerts key={Math.random()} type="info" message="Passwords do not match" />);
        }
      }

    return (
    <div className='userLogged userSettings'>
        {changeUserInfoStatus}
        <Title>Settings</Title>
        <form onSubmit={changeUserSubmit} id='settingsForm' className='userContentWrapper'>
            <Subtitle>Your profile</Subtitle>
            Click on avatar or name to change it
            <div className='userNameWrapper'>
                <div className='userAvatar userAvatarSettings' onClick={() => changeUserInfo("avatar")} style={{backgroundColor: `${userInfo['avatarColor'] || user['avatarColor']}88`}}>{userInfo['avatarIcon'] || user['avatarIcon']}</div>
                <div className='userNameSettings' onClick={() => changeUserInfo("name")}><Subtitle>{userInfo['name'] || user['name']}</Subtitle></div>
            </div>
            <br/>
            <Subtitle>Minebound</Subtitle>
            Link your Minebound account here
            <input className='input disabled' disabled placeholder='Currently unavailable'/>
            <br/>
            <Subtitle>Your EMail</Subtitle>
            <input className='input disabled' disabled placeholder='EMail' value={user['email'].toString()}/>
            <br/>
            <Subtitle>Change password</Subtitle>
            You'll need to log in again after changing your password.
            <input className='input' name='newPassword' placeholder='New password'/>
            <input className='input' name='newPassword2' placeholder='Repeat new password'/>
        </form>
        <button type='submit' form="settingsForm" className='settingsButton'>Save changes</button><a href='/user'><Button key={2} type='inline'>Back to menu</Button></a>
    </div>
    );
}

export default UserSettings;