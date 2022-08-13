import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import styles from './dropdown.module.scss'

interface DropdownProps {
  label: {text: string, link: string},
  items: {id: number, text: string, link: string}[]
}
const Dropdown: React.FC<DropdownProps> = ({label, items}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const dropdownRef = useRef<any>(null)

  const setActive = () => {
    let dropdown = dropdownRef.current
    let siblings = dropdown.parentElement.children

    if (!dropdown.classList.contains('active') ) { 
      for(let sib of siblings) {
        sib.classList.remove('active')
      }
      dropdown.classList.add('active')
    } else {
      dropdown.classList.remove('active')
    }
  }

  return (
    <div className={`${styles.dropdown}`} onClick={setActive} ref={dropdownRef}>
      <div className={styles.dropdown__button}>
        <Link  href={label.link}>
          <a className={styles.link}>{ label.text }</a>
        </Link>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <ul className={styles.dropdown__list}>
        {
          items.map((item) => (
            <li key={item.id}>
              <Link href={ item.link }>
                <a className={styles.link}>{ item.text}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Dropdown