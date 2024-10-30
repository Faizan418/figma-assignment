import React from 'react'
import styles from '../Footer/Footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.containar} id='footer'>
        <div className={styles.one}>
            <p>Muhammad Faizan 2024</p>
        </div>
        <div className={styles.two}>
            <ul className={styles.ul_li}>
                <Link href={"https://www.linkedin.com/in/muhammad-faizan-2541132b8"}><li className={styles.li}>Linkedin</li></Link>
                <Link href={"https://wa.me/+923406044359"}><li className={styles.li}>Whatsapp</li></Link>
                <Link href={"https://x.com/muhammadf4060"}><li className={styles.li}>Twitter</li></Link>
                <Link href={"https://www.instagram.com/fazii.963/"}><li className={styles.li}>Instagram</li></Link>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
