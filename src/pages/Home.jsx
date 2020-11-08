import React from 'react'
import { Route } from 'react-router-dom'
import {Header, AllUsers, UserInfo, Photo, AllAlbums} from '../components'

function Home() {
    const users = () => <AllUsers/>
    const userInfo = () => <UserInfo/>
    const photo = () => <Photo/>
    const allAlbums = () => <AllAlbums/>
    return (
        <div>
            <Header />
            <div className='container'>
            <Route path='/' render={users} exact />
            <Route path='/User/:id?' render={userInfo} exact />
            <Route path='/Photo/:albumId?' render={photo} exact />
            <Route path='/All_Albums/' render={allAlbums} exact />
            </div>
        </div>
    )
}

export default Home
