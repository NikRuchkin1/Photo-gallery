import React from 'react'
import { getCurrentUser } from '../redux/action/user'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
    //     apiKey: "AIzaSyBf4Un7aQwxSpQXIwG3sf1epeA6_tq0loQ",

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Albums(props) {
    const dispatch = useDispatch()
    React.useEffect(() => {
        let userID = +props.match.params.id;
        if (!userID) {
            userID = 0;
        }
        dispatch(getCurrentUser(userID))
    }, []);
    const currentUser = useSelector(({userReducer}) => userReducer.currentUser)
    const companyUser = useSelector(({userReducer}) => userReducer.currentUser.company)
    const addressUser = useSelector(({userReducer}) => userReducer.currentUser.address)
    // const geoUser = useSelector(({userReducer}) => userReducer.currentUser.address.geo)
    // console.log(geoUser)
    const center = {
        lat: 59.95,
        lng: 30.33
      }
    const zoom = 11
    return (
        <div>
        <div className='userInfoBox'>
            <div className='userInfo'>
                {currentUser && currentUser.name}
            </div>
            <div className='userInfo'>
                {currentUser && currentUser.username}
            </div>
            <div className='userInfo'>
                {currentUser && currentUser.email}
            </div>
            <div className='userInfo'>
                {currentUser && currentUser.phone}
            </div>
            <div className='userInfo'>
                {companyUser && companyUser.name}
            </div>
            <div className='userInfo'>
                {companyUser && companyUser.catchPhrase}
            </div>
            <div className='userInfo'>
                {companyUser && companyUser.bs}
            </div>
            <div className='userInfo'>
                {currentUser.website}
            </div>
            <div className='map'>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDY8W-SRlOPlo6--wB7CDx2ezYsZ4N1NkE' }}
                defaultCenter={center}
                defaultZoom={zoom}
                >
                <AnyReactComponent
                    // lat={currentUser && currentUser.address.geo.lat}
                    // lng={currentUser && currentUser.address.geo.lng}
                />
                </GoogleMapReact>
            </div>
        </div>
            {/* <div className='userInfo'>
                {currentUser.address.city}
            </div>
            <div className='userInfo'>
                {currentUser.company.catchPhrase}
            </div>
            <div className='userInfo'>
                {currentUser.company.bs}
            </div> */}
        </div>
    )
}

const AlbumsRouter = withRouter(Albums);
export default AlbumsRouter
