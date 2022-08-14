import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import styles from './select.module.scss'

interface SelectProps {
  options: { id: number, text: string, value: string, icon?: React.ReactNode }[],
  classStyles?: string
}
const Select: React.FC<SelectProps> = ({ options, classStyles }) => {
  const [selected, setSelected] = useState<any>(options[0])
  const [showOptions, setShowOptions] = useState<boolean>(false)

  const handleFocus = () => {
    setShowOptions(true)
  }

  const handleBlur = () => {
    setShowOptions(false)
  }

  const handleSelected = (value: { id: number, text: string, value: string, icon?: React.ReactNode }) => {
    setSelected(value)
    setShowOptions(false)
  }

  return (
    <div className={`${styles.select} ${classStyles}`} onMouseEnter={handleFocus} onMouseLeave={handleBlur}>
      <div className={`${styles.select__btn} ${showOptions && styles.focus}`}>
        <p>
          {selected.text}
          {selected.icon && selected.icon}
        </p>
        <FontAwesomeIcon icon={faAngleDown} size='xs' className={styles.sort_icon} />
      </div>
      <ul className={`${styles.select__options} ${showOptions ? '' : 'hidden'}`}>
        {
          options.map((option) =>
            <li key={option.id} onClick={() => handleSelected(option)}>
              <span>{option.text}</span>
              {option.icon && option.icon}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Select