import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import gallery from '../img/ga.png'
import { getAllAlbum, getPhotoUser } from '../redux/action/user'

function AllAlbums() {
    const dispatch = useDispatch()
    React.useEffect( () => {
        dispatch(getAllAlbum())
    },[])

    const albums = useSelector(({userReducer}) => userReducer.albums)
    return (
        <div className='main'>
            {albums && albums.map(data =>
                <Link to={'/Photo/' + data.id} key={data.id}>
                    <div className='album'>
                        <div>
                            <img
                            src={data.image? data.image : gallery}
                            alt='Photo album'/>
                        </div>
                        <div>{data.title}</div>
                        <div>{`Amount photo: ${data.amountPhoto}`}</div>
                    </div>
                </Link>)}
        </div>
    )
}

export default AllAlbums
