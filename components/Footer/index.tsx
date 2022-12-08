import React from 'react'
import Link from 'next/link'
import { FooterItem } from '../../ultils/footerItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={`${styles.footer} my-container flex flex-col items-center`}>
      <Link href="/">
        <a className='w-full h-8 lg:h-10 block my-12 lg:my-16'>
          <img src="/logo-white.svg" alt="logo" className='w-[160px] lg:w-[195px] h-full object-cover mx-auto' />
        </a>
      </Link>
      <div className='w-full h-[1px] bg-zinc-400'></div>
      <div className='py-12 flex justify-start w-full flex-col md:flex-row'>
        {
          FooterItem.map((item) => 
            <div key={item.id} className='w-1/2 lg:w-1/4 mb-5 lg:mb-0'>
              <h3 className='montserrat text-base md:text-sm lg:text-base leading-4 font-semibold mb-5'>{item.label}</h3>
              {
                item.children.map((i) =>
                  <Link href={i.link} key={i.id}>
                    <a className='text-sm leading-6 my-1 block opacity-60 hover:opacity-100'>
                      {i.label}
                    </a>
                  </Link>
                )
              }
            </div>
          )
        }
        <div className='w-full lg:w-1/4'>
          <h3 className='montserrat text-base md:text-sm lg:text-base leading-4 font-semibold mb-5'>
            ON SOCIAL NETWORKS
          </h3>
          <Link href='/'>
            <a className='text-xl lg:text-2xl leading-6 my-1 inline opacity-60 hover:opacity-100 mr-4 lg:mr-8'>
              <FontAwesomeIcon icon={faFacebookF as IconProp} />
            </a>
          </Link>
          <Link href='/'>
            <a className='text-xl lg:text-2xl leading-6 my-1 inline opacity-60 hover:opacity-100 mr-4 lg:mr-8'>
              <FontAwesomeIcon icon={faPinterestP as IconProp} />
            </a>
          </Link>
          <Link href='/'>
            <a className='text-xl lg:text-2xl leading-6 my-1 inline opacity-60 hover:opacity-100 mr-4 lg:mr-8'>
              <FontAwesomeIcon icon={faTwitter as IconProp} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
