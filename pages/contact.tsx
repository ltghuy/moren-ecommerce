import React from 'react'
import Layout from '../components/Layout'
import ContactPage from '../containers/ContactPage'

const Contact = () => {
  return (
    <div>
      <Layout 
      title={'Moren Ecommerce | Contact'}
      content={<ContactPage />}
    />
    </div>
  )
}

export default Contact