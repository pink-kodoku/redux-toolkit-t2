import { LabelHTMLAttributes } from 'react';
import styles from './styles.module.scss'

interface ILabel extends LabelHTMLAttributes<HTMLElement> { }

export const Label: React.FC<ILabel> = ({ children, ...props }) => {
  return (
    <label className={styles.label} {...props}>{children}</label>
  )
}
