import React from 'react'
import {Album} from '../components'
import { getCurrentUser } from '../redux/action/user'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;
function Albums(props) {
    const dispatch = useDispatch()
    React.useEffect(() => {
        let userID = +props.match.params.id;
        if (!userID) {
            userID = 1;
        }
        dispatch(getCurrentUser(userID))
    }, []);
    const currentUser = useSelector(({userReducer}) => userReducer.currentUser)
    const albums = useSelector(({userReducer}) => userReducer.albums)

    const latUser = +currentUser.address.geo.lat
    const lngUser = +currentUser.address.geo.lng
    const center = {
        lat: 59.95,
        lng: 30.33
      }
    center.lat = latUser
    center.lng = lngUser
    return (
        <div>
            <div className='userInfoBox'>
                <div className='boxInfo'>
                    <div className='userInfo'>
                        <div>Name:</div><div>{currentUser.name}</div>
                    </div>
                    <div className='userInfo'>
                        <div>Nickname:</div><div>{currentUser.username}</div>
                    </div>
                    <div className='userInfo'>
                        <div>E-mail:</div><div>{currentUser.email}</div>
                    </div>
                    <div className='userInfo'>
                        <div>Phone number:</div><div>{currentUser.phone}</div>
                    </div>
                    <div className='userInfo'>
                        <div>Company name:</div><div>{currentUser.company.name}</div>
                    </div>
                    <div className='userInfo'>
                        <div>Kind of activity:</div><div>{currentUser.company.catchPhrase}</div>
                    </div>
                    <div className='userInfo'>
                        <div>Description:</div><div>{currentUser.company.bs}</div>
                    </div>
                    <div className='userInfo'>
                        <div>Website:</div><div>{currentUser.website}</div>
                    </div>
                    <div className='userInfo'>
                        <div>Street:</div>
                        <div className='addressBox'>
                            {currentUser.address.street}
                        </div>
                    </div>
                    <div className='userInfo'>
                        <div>Suite:</div>
                        <div className='addressBox'>
                            {currentUser.address.suite}
                        </div>
                    </div>
                    <div className='userInfo'>
                        <div>City:</div>
                        <div className='addressBox'>
                            {currentUser.address.city}
                        </div>
                    </div>
                    <div className='userInfo'>
                        <div>Zipcode:</div>
                        <div className='addressBox'>
                            {currentUser.address.zipcode}
                        </div>
                    </div>
                </div>
                <div className='map'>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDY8W-SRlOPlo6--wB7CDx2ezYsZ4N1NkE' }}
                    center={center}
                    zoom={3}
                    >
                        <Marker
                            lat={latUser}
                            lng={lngUser}
                            text="I'm here"
                        />
                    </GoogleMapReact>
                </div>
            </div>
            <div className='albumsBox'>
                <Album albums={albums}/>
            </div>
        </div>
    )
}

const AlbumsRouter = withRouter(Albums);
export default AlbumsRouter
