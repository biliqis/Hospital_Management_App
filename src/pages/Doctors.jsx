import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const {speciality} = useParams()
  const {Doctors} = useContext(AppContext)

  return (
    <div>
      <p> </p>
    </div>
  )
}

export default Doctors
