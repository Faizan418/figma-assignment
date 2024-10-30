import React from 'react'
import styles from '../Section5/Section5.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Section5() {
  return (
    <div>
      <div className={styles.first}>
            <div className={styles.one}>
                <h1 className={styles.heading1}>05 / Multi-Pages-web-clone</h1>
                <h2 className={styles.heading2}>Create a Simple multi pages web Clone GIAIC Milestone-2 Assignment...</h2>
                <p className={styles.click}><Link href={"#"}> &rdquo;Click here&rdquo; to see this project__</Link></p>
            </div>
            <div className={styles.two}>
                    <div className={styles.img_div}>
                    <Image className={styles.img1} src={'/images/multi-page-web.png'} alt='project Image' height={1000} width={1000}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Section5
