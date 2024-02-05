import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  appearence?: 'big' | 'small'
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}
