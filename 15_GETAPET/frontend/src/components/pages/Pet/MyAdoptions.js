import React, { useEffect, useState } from 'react'
import api from '../../../utils/api'

import styles from './Dashboard.module.css'

import RoundedImage from '../../layout/RoundedImage'

export default function MyAdoptions() {
  const [pets, setPets] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')

useEffect(() => {
  api.get('pets/myadoptions', {
    headers: {
    Authorization: `Bearer ${JSON.parse(token)}`,
    }
  }).then((response) => {
    setPets(response.data.pets)
  })
}, [token])


  return (
    <div>MyAdoptions</div>
  )
}
