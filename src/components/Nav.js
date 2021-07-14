import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/ofertas'>Ofertas</Link>
            <Link to='/bevidas'>Bevidas</Link>
            <Link to='/especiales'>especiales</Link>
        </div>
    )
}

export default Nav
