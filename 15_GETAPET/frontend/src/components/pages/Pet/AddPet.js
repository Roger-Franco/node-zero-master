import React from 'react'
import api from '../../../utils/api'

import styles from './AddPet.module.css'

/*  hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'
import PetForm from '../../form/PetForm'

export default function AddPet() {
  return (
    <section className={styles.addpet_header}>
      <div>
      <h1>Cadastre um Pet</h1>
      <p>Depois ele ficará disponível para adoção</p>
      </div>
      <PetForm btnText="Cadastrar Pet" />
    </section>
  )
}
