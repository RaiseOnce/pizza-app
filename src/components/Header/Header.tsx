import React, { FC } from 'react'
import styles from './Header.module.scss'
import { HeaderProps } from '../../types'

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return (
    <h1 {...props} className={styles.header}>
      {children}
    </h1>
  )
}

export default Header
