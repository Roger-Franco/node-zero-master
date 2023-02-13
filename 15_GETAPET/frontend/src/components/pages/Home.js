import React, { useEffect, useState } from 'react'
import api from '../../utils/api'

import styles from './Home.module.css'

export default function Home() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    api.get('/pets').then((response) => {
      setPets(response.data.pets)
      // console.log(pets);
      // console.log(response);
    })
    
  }, [])
  // console.log(pets);

  return (
    <section>
      <h1>Home</h1>
    </section>
  )
}
