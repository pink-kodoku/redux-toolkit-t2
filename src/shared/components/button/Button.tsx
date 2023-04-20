import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLElement> {

}

export const Button: React.FC<IButton> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}