import React from 'react'
import Layout from '../components/Layout'
import AboutPage from '../containers/AboutPage'

const AboutUs = () => {
  return (
    <div>
      <Layout
        title={'Moren Ecommerce | About Us'}
        content={<AboutPage />}
      />
    </div>
  )
}

export default AboutUs