import { Link } from "react-router-dom"
import styles from './styles.module.scss'
import { Container } from "../container/Container"
import { memo } from "react"

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <Container>
        <h2>Redux blog</h2>
        <nav>
          <ul>
            <li className={styles.links}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.links}>
              <Link to='/post'>Create Post</Link>
            </li>
            <li className={styles.links}>
              <Link to='/user'>Users</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
})