import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p style={{marginTop: '1rem'}}>Site feito durante o Curso de React da Origamid</p>
    </footer>
  )
}

export default Footer