import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setPhoto } from '../redux/action/user';

function Photo(props) {
    const dispatch = useDispatch()
    React.useEffect(() => {
        let albumID = +props.match.params.albumId;
        if (!albumID) {
            albumID = 1;
        }
        dispatch(setPhoto(albumID))
    }, []);
    const photo = useSelector(({userReducer}) => userReducer.photos)

    return (
        <div>
            <div className='main'>
                {photo.map(u => 
                    <div className='photoBox' key={u.id}>
                        <div>
                            <img src={u.thumbnailUrl} alt='photo'/>
                        </div>
                        <div>
                            {u.title}
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

const PhotoRouter = withRouter(Photo);
export default PhotoRouter
