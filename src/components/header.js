import '../sass/components/header.scss'

import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

const Header = () => (
    <div className="row">
        <header className="header">
            <div className="header__textbox">
                <h1 className="h1 text-uppercase">Syed Mohsin Raza</h1>
                <p className='header__text'>I build websites that work for everyone with focus on responsive design, accessibility, performance, and cutting-edge tech. </p>
            </div>
            <StaticImage class='header__img'  loading='eager' src='../images/author.jpg' alt='smiling person standing in a hall wearing formal suit' placeholder='blurred' />
        </header>
    </div>
)

export default Header