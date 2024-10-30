import React from 'react'
import styles from '../Section4/Section4.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Section4() {
  return (
    <div>
      <div className={styles.first}>
            <div className={styles.one}>
                <h1 className={styles.heading1}>04 / Resume web</h1>
                <h2 className={styles.heading2}>Create a Simple Static Interactive resume...</h2>
                <p className={styles.click}><Link href={"https://static-interactive-resume-nine.vercel.app/"} target='_blank'> &rdquo;Click here&rdquo; to see this project__</Link></p>
            </div>
            <div className={styles.two}>
                    <div className={styles.img_div}>
                    <Image className={styles.img1} src={'/images/static-resume.png'} alt='project Image' height={1000} width={1000}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Section4
