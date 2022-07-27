import '../sass/components/nav.scss'

import * as React from 'react'

import { Link } from 'gatsby'

const Nav = () => (

    <div className="row">
        <nav className="nav">
            <Link to='/' className="nav__link">Home</Link>
            <Link to="/#work" className="nav__link">Work</Link>
            <Link to='/posts' className="nav__link">Blog</Link>
            <Link to='/#contact' className="nav__link">Contact</Link>
        </nav>
    </div>

)

export default Nav