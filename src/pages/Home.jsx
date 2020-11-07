import React from 'react'
import { Route } from 'react-router-dom'
import {Header, AllUsers, Albums} from '../components'

function Home() {
    const users = () => <AllUsers/>
    const albums = () => <Albums/>
    return (
        <div>
            <Header />
            <div className='container'>
            <Route path='/' render={users} exact />
            <Route path='/User/:id?' render={albums} exact />
            </div>
        </div>
    )
}

export default Home
