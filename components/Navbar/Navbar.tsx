import React from 'react'
import styles from '../Navbar/Navbr.module.css'

function Navbar() {
  return (
    <div className={styles.containar}>

        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>M/F</h1>
            </div>

            <div className={styles.menu_div}>
                <ul className={styles.menu}>
                    <li className={styles.li}><a href="#">Word</a></li>
                    <li className={styles.li}><a href="#">About</a></li>
                    <li className={styles.li}><a href="#">Playground</a></li>
                    <li className={styles.li}><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className={styles.hamburger}>
            &#9776;
            </div>

        </nav>
      
    </div>
  )
}

export default Navbar
