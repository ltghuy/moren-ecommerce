import type { NextPage } from 'next'
import React from 'react'
import Layout from '../containers/Layout'
import HomePage from '../containers/HomePage'


const Home: NextPage = () => {
  return (
    <>
      <Layout 
        content={<HomePage />}
        title='Moren Ecommerce | Home Page  '
      />
    </>
  )
}

export default Home
