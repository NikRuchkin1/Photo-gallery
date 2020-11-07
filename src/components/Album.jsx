import React from 'react'
import { Link } from 'react-router-dom'
import gallery from '../img/ga.png'

function Album(props) {

    return (
        <div>
            <div className='main'>
                {props.albums.map(data =>
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
}

export default Album
