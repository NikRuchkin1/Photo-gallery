import React from 'react'
import { useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import gallery from '../img/ga.png'

const AlbumMemo = React.memo(function Album() {
    const albumReducer = useSelector(({userReducer}) => userReducer.albums)
    return (
        <div>
            <div className='main'>
                {albumReducer && albumReducer.map(data =>
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
        </div>
    )
})

const AlbumRouter = withRouter(AlbumMemo);
export default AlbumRouter
