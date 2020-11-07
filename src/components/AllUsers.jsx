import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setUser, getCurrentUser} from '../redux/action/user'
import userPhoto from '../img/userPhoto.jpg'
import { Link } from 'react-router-dom';

function Albums() {
    const users = useSelector(({ userReducer }) => userReducer.users);
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(setUser());
    }, []);
    const onSelectUser = React.useCallback((userID) => {
        dispatch(getCurrentUser(userID));
      }, []);
    return (
        <div className='main'>
            {users.map(arr =>
            <div className='user' key={arr.id}>
                <Link className='link_user'
                to={'/user/' + arr.id}
                onClick={() => {onSelectUser(arr.id)}}>
                    <div>
                        <div>
                            <img src={arr.photo? arr.photo : userPhoto} alt='user photo'/>
                        </div>
                        <div className='descriptionUser'>
                            <h3>{arr.username}</h3>
                        </div>
                    </div>
                </Link>
            </div>)}
        </div>
    )
}

export default Albums
