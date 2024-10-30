'use client'
import Link from 'next/link';
import styles from '../Navbar/Navbr.module.css'
import React, { useState } from "react";


function Navbar() {

    const [menuActive, setMenuActive] = useState(false);
    function toggleMenu() {
      setMenuActive(!menuActive);
    }

  return (
    <div className={styles.containar}>

        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>M/F</h1>
            </div>

                {/* <ul className={styles.menu}> */}
                <ul className={`${styles.menu} ${menuActive ? styles.active : ""}`}>
                <Link href="#word"><li className={styles.li}>Word</li></Link>
                <Link href="#"><li className={styles.li}>About</li></Link>
                <Link href="#"><li className={styles.li}>Playground</li></Link>
                <Link href="#footer"><li className={styles.li}>Contact</li></Link>
                </ul>


            <div className={styles.hamburger}  onClick={toggleMenu}>
            &#9776;
            </div>

        </nav>
      
    </div>
  )
}

export default Navbar
