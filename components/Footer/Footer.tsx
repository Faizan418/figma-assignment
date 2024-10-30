import React from 'react'
import styles from '../Footer/Footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.containar}>
        <div className={styles.one}>
            <p>Muhammad Faizan --- 2024</p>
        </div>
        <div className={styles.two}>
            <ul className={styles.ul_li}>
                <li className={styles.li}><Link href={"#"}>Linkedin</Link></li>
                <li className={styles.li}><Link href={"#"}>Whatsapp</Link></li>
                <li className={styles.li}><Link href={"#"}>Twitter</Link></li>
                <li className={styles.li}><Link href={"#"}>Instagram</Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
