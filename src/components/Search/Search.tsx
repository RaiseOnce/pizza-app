import { SearchProps } from '../../types'
import React, { FC } from 'react'
import styles from './Search.module.scss'

const Search: FC<SearchProps> = (props) => {
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.input} {...props} />
      <img className={styles.search} src="/search.svg" alt="" />
    </div>
  )
}

export default Search
