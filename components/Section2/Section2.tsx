import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../Section2/Section.module.css'

function Section2() {
  return (
    <div>
      <div className={styles.first}>
            <div className={styles.one}>
                <h1 className={styles.heading1}>02 / Multi-Pages-web-clone</h1>
                <h2 className={styles.heading2}>Create a Simple multi pages web Clone GIAIC Milestone-2 Assignment...</h2>
                <p className={styles.click}><Link href={"#"}> "Click here" to see this project__</Link></p>
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

export default Section2
