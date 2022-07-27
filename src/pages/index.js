import * as React from 'react'

import Contact from '../components/contact'
import Header from '../components/header'
import Layout from '../components/layout'
import Work from '../components/work'

const Home = () => (
    <Layout>
      <Header />
      <Work />
      <Contact />
    </Layout>
)

export default Home