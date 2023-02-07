import React, { useState } from 'react'

import styles from './Message.module.css'


export default function Message() {
  const [type, setType] = useState("")
  return (
    <div className={`${styles.message} ${styles[type]}`}>Minha mensagem</div>
  )
}
