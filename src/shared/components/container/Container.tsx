import styles from './styles.module.scss'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

export const Container: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
