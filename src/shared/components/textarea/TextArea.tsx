import { TextareaHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface IProps extends TextareaHTMLAttributes<HTMLElement> {

}

export const Textarea: React.FC<IProps> = ({...props}) => {
  return (
    <textarea className={styles.textarea} {...props}/>
  )
}