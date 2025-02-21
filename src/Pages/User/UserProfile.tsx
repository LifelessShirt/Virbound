import { Dispatch, SetStateAction } from 'react';
import Badge from '../../Components/Badge/Badge';
import { Button } from '../../Components/Button/Button';
import { Subtitle } from '../../Components/Subtitle/Subtitle';
import './User.css';
import { Title } from '../../Components/Title';

const UserProfile = (user: {"error": Boolean,"name": String,"email": String,"avatarColor": String,"avatarIcon": String,"badges": String,"minecraft_account": String,"minecraft_skin": String,"status": String}) => {
    const logout = () => {
        localStorage.removeItem("access_token");
        window.location.reload();
      }
    return (
    <div className='userLogged'>
        <div className='userNameWrapper'>
        <div className='userAvatar' style={{backgroundColor: `${user['avatarColor']}88`}}>{user['avatarIcon']}</div>
        <Subtitle>{user['name']}</Subtitle>
        {/* <button className='userLogout' onClick={() => logout()}></button> */}
        </div>
        <div className='userContentWrapper'>
        <div className='userContentBlock'>
            <div style={{flexDirection: "row", flexWrap: "wrap"}}>
            {user.badges ? 
            user['badges'].split(",").map((item:any) => (
                <Badge id={item} />
            ))
            :
            <>
            <Subtitle>You have not earned any badges yet</Subtitle>
            <a href='/wiki?navTo=1'><Button>How to earn?</Button></a>
            </>
            }</div>
        </div>
        <div className='userContentBlock'  style={{flexDirection: "row", flexWrap: "wrap"}}>
            {user['minecraft_account'] != '' ? 
            <>
            <img src={`${user['minecraft_skin']}`} width="32px"/><Subtitle>{user['minecraft_account']}</Subtitle>
            </>
            :
            <>
            <Subtitle>MineBound account is not linked</Subtitle>
            <a href='/user?tab=settings'><Button>Link</Button></a>
            </>
            }
        </div>
        </div>
        <a href='/user?tab=settings'><Button key={1} type='inline'>Settings</Button></a>
        <button className='userLogout2' onClick={() => logout()}></button>
    </div>
    );
}

export default UserProfile;