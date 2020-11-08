import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCurrentPhoto, setPhoto } from '../redux/action/user';
import {Popup} from '../components'

function Photo(props) {
    const dispatch = useDispatch()
    React.useEffect(() => {
        let albumID = +props.match.params.albumId;
        if (!albumID) {
            albumID = 1;
        }
        dispatch(setPhoto(albumID))
    }, []);
    const photoArray = useSelector(({userReducer}) => userReducer.photos)
    const [popup, setPopup] = React.useState(false)
    const openPopup = (id) => {
        setPopup(!popup)
        dispatch(getCurrentPhoto(id))
    }
    const closePopup = () => {
        setPopup(!popup)
    }
    return (
        <div>
            <div className='main'>
                {photoArray && photoArray.map(u =>
                    <div
                    className='photoBox'
                    onClick={()=>openPopup(u.id)}
                    key={u.id}>
                        <div>
                            <img src={u.thumbnailUrl} alt='photo'/>
                        </div>
                        <div>
                            {u.title}
                        </div>
                    </div>)}
            </div>
            {popup? <Popup openPopup={closePopup} /> : null}
        </div>
    )
}

const PhotoRouter = withRouter(Photo);
export default PhotoRouter
