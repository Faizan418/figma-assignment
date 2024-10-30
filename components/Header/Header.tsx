import React from 'react'
import styles from '../Header/Header.module.css'


function Header() {
  return (
    <div className={styles.containar}>
        <div className={styles.first}>
            <div className={styles.one}>Hello,  I&rsquo;m <br /> Muhammad Faizan.</div>
            <div className={styles.two}>I&rsquo;m student of Governor sindh IT initiative Cloud Computing Genrative AI. & Saylani Mass IT Training Student.</div>
        </div>
    </div>
  )
}

export default Header
