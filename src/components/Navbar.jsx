import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navElem}>
        <Link to="/" className={styles.brandLink}>
          <span className={styles.brandName}>Shiba Inu</span>
        </Link>
      </div>
      <div className={styles.navElem}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.navElem}>
        <Link to="/about">About Us</Link>
      </div>
      <div className={styles.navElem}>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
