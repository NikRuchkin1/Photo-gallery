import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextCurrentPhoto, prevCurrentPhoto } from '../redux/action/user';

function Popup({openPopup}) {
    const dispatch = useDispatch()
    const currentPhoto = useSelector(({userReducer}) => userReducer.currentPhoto)
    const photoRef = React.useRef();
    const handleClick = (event)=> {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(photoRef.current)) {
        openPopup()
        document.body.removeEventListener('click', handleClick)}
    }
    const prevPhoto = () => {
        dispatch(prevCurrentPhoto())
    }
    const nextPhoto = () => {
        dispatch(nextCurrentPhoto())
    }
    React.useEffect(() => {
        document.body.addEventListener('click', handleClick);
      }, []);
    return (
        <div className='popup'>
            <div
            className='popupBox'>
                <div
                className='imagePopup'
                ref={photoRef}>
                    <div><img src={currentPhoto} alt='photo'/></div>
                    <div>
                        <button className='btnPhoto' onClick={prevPhoto}>prev</button>
                        <button className='btnPhoto' onClick={nextPhoto}>next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
