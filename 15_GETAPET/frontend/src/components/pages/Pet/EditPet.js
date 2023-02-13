import React from 'react'
import api from '../../../utils/api'

import styles from './AddPet.module.css'

import PetForm from '../../form/PetForm'

/*  hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

export default function EditPet() {
  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o Pet: 'pet.name'</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </div>
    </section>
  )
}
