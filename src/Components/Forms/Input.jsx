import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name, value, onChange}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input id={name} type={type} name={name} className={styles.input} value={value} onChange={onChange} />
      <p className={styles.error}>Error</p>
    </div>

  )
}

export default Input