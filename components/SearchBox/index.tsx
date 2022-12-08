import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './search.module.scss'

interface SearchProps {
  setShowSearch: (show: boolean) => void
}

const SearchBox: React.FC<SearchProps> = ({ setShowSearch }) => {
  return (
    <div className={`${styles.search} flex items-center justify-center`}>
      <div className={styles.close} onClick={() => setShowSearch(false)}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={styles.box}>
        <p className='text-white text-lg leading-8'>Start typing and press Enter to search</p>
        <div className={`${styles.form} flex items-center justify-end mt-4`}>
          <input type="text" placeholder='Search' />
          <div className={`${styles.icon} flex items-center justify-center cursor-pointer`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
