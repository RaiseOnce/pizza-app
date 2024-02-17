import React, { FormEvent, useState } from 'react'
import styles from './Login.module.scss'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios, { AxiosError } from 'axios'
import { PREFIX } from '../../api/API'
import { LoginResponse } from '../../types'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { userActions } from '../../store/user.slice'

interface LoginForm {
  email: string
  password: string
}

const Login = () => {
  const [error, setError] = useState<string | null>()

  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email,
        password,
      })
      dispatch(userActions.addJwt(data.access_token))
      navigate('/')
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message)
      }
    }
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    await sendLogin(formData.email, formData.password)
  }

  return (
    <>
      <Header className={styles.header}>Вход</Header>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <label>Ваш email</label>
          <Input
            placeholder="E-mail"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className={`${styles.inputWrapper} ${styles.inputWrapperLast}`}>
          <label>Ваш пароль</label>
          <Input
            placeholder="Пароль"
            name="password"
            type="password"
            className={styles.input}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <Button className={styles.btn} appearence="big" onClick={submit}>
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
