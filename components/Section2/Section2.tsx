import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../Section2/Section.module.css'

function Section2() {
  return (
    <div>
      <div className={styles.first}>
            <div className={styles.one}>
                <h1 className={styles.heading1}>02 / GIAIC Web Clone</h1>
                <h2 className={styles.heading2}>Create a Simple GIAIC web Clone Assignment...</h2>
                <p className={styles.click}><Link href={"https://giaic-web-dsar.vercel.app/"} target='_blank'> &rdquo;Click here&rdquo; to Live Demo__</Link></p>
            </div>
            <div className={styles.two}>
                    <div className={styles.img_div}>
                    <Image className={styles.img1} src={'/images/giaic-web-clone.png'} alt='project Image' height={1000} width={1000}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Section2
