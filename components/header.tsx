import styles from '../styles/header.module.css'
import Link from 'next/link'
import Navbar from './navbar'
export default function Header() {
    return (
      <main className={styles.maoo}>
        <div className={styles.dec}>
        
       <Navbar/>
        </div>
      </main>
    )
  }
  