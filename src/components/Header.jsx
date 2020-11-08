import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <div className="Header">
            <div className='header_box'>
                <ul className='noteHeader'>
                    <NavLink className='LinkHeader' to='/'>
                        <li>
                            Пользователи
                        </li>
                    </NavLink>
                    <NavLink className='LinkHeader' to='/All_Albums/'>
                        <li>
                            Альбомы
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className='header_photo'>

            </div>
        </div>
    )
}

export default Header
