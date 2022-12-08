import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../Navbar'
import NavbarLink from '../Navbar/navbarLink'
import Footer from '../Footer'

interface LayoutProps {
  content: React.ReactNode,
  title: string
}

const Layout: React.FC<LayoutProps> = ( {content,title}) => {
  const [navbarFixed, setNavbarFixed] = useState<boolean>(false)
  const router = useRouter()
  let navbar = <NavbarLink fixed={navbarFixed}/>

  const handleFixed = () => {
    if (window.scrollY >= 250) {
      setNavbarFixed(true)
    } else {
      setNavbarFixed(false)
    }
  } 

  const handleNavbar = () => {
    if (router.pathname === '/') {
      navbar = <Navbar fixed={navbarFixed} /> 
    }
    return navbar
  }

  useEffect(() => {
    window.addEventListener('scroll', handleFixed)
    return () => {
      window.removeEventListener('scroll', handleFixed)
    }
  }, [])
  return (
    <>
      <Head>
          <title>{ title }</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        { handleNavbar() }
        { content }
        <Footer />
    </>
  )
}

export default Layout
