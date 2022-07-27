import '../sass/base/_base.scss'

import * as React from 'react'

import BtnMoveToTop from '../components/btn-to-top'
import Footer from './footer'
import Nav from '../components/nav'
import Seo from '../components/seo'

const Layout = ({ children, title, description, url }) => (
    <>
        <Seo title={title} description={description} url={url} />
        <Nav />
        {children}
        <Footer />
        <BtnMoveToTop />
    </>
)

export default Layout