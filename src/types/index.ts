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

export interface ProductCardsProps {
  name: string
  description: string
  image: string
  id: number
  rating: number
  price: number
}

export interface ProductProps {
  id: number
  name: string
  price: number
  ingredients: string[]
  image: string
  rating: number
}

export interface ProductCards {
  products: ProductProps[]
}
