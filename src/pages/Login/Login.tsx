import React from 'react'
import styles from './Login.module.scss'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Header className={styles.header}>Вход</Header>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <label>Ваш email</label>
          <Input placeholder="E-mail" className={styles.input} />
        </div>

        <div className={`${styles.inputWrapper} ${styles.inputWrapperLast}`}>
          <label>Ваш пароль</label>
          <Input placeholder="Пароль" className={styles.input} />
        </div>
        <Button className={styles.btn} appearence="big">
          Вход
        </Button>
        <div className={styles.foot}>
          <span>Нет аккаунта?</span>
          <Link to="auth/register">
            <span>Зарегестрироваться</span>
          </Link>
        </div>
      </form>
    </>
  )
}

export default Login
