import React from 'react'
import styles from './Register.module.scss'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <Header className={styles.header}>Регистрация</Header>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <label>Ваш email</label>
          <Input placeholder="E-mail" className={styles.input} />
        </div>

        <div className={styles.inputWrapper}>
          <label>Ваш пароль</label>
          <Input placeholder="Пароль" className={styles.input} />
        </div>

        <div className={`${styles.inputWrapper} ${styles.inputWrapperLast}`}>
          <label>Ваше имя</label>
          <Input placeholder="Имя" className={styles.input} />
        </div>
        <Button className={styles.btn} appearence="big">
          Зарегестрироваться
        </Button>
        <div className={styles.foot}>
          <span>Есть аккаунт?</span>
          <Link to="/auth/login">
            <span>Войти</span>
          </Link>
        </div>
      </form>
    </>
  )
}

export default Register
