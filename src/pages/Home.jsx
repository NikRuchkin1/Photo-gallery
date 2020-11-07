import React from 'react'
import { Route } from 'react-router-dom'
import {Header, AllUsers, UserInfo, Photo} from '../components'

function Home() {
    const users = () => <AllUsers/>
    const userInfo = () => <UserInfo/>
    const photo = () => <Photo/>
    return (
        <div>
            <Header />
            <div className='container'>
            <Route path='/' render={users} exact />
            <Route path='/User/:id?' render={userInfo} exact />
            <Route path='/Photo/:albumId?' render={photo} exact />
            </div>
        </div>
    )
}

export default Home
