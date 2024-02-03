import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  appearence?: 'big' | 'small'
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
