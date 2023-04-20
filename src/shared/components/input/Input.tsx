import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss'

interface InputInterface extends InputHTMLAttributes<HTMLElement> { }

export const Input: React.FC<InputInterface> = ({ ...props }) => {
  return (
    <input className={styles.input} {...props} />
  )
}
