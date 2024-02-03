import React, { FC } from 'react'
import styles from './Input.module.scss'
import { InputProps } from '../../types'

const Input: FC<InputProps> = ({ ...props }) => {
  return <input {...props} className={styles.input} />
}

export default Input
