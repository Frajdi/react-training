import React, { useContext } from 'react'
import { DataContext } from '../Home'

const useAdress = () => {

    const { setFormData} = useContext(DataContext)


    const handleCountry = (e) => {
        setFormData((prev => { return { ...prev, adress: { ...prev.adress, country: e.target.value } } }))
    }

    const handleCity = (e) => {
        setFormData((prev => { return { ...prev, adress: { ...prev.adress, city: e.target.value } } }))
    }

    const handleStreetName = (e) => {
        setFormData((prev => { return { ...prev, adress: { ...prev.adress, streetName: e.target.value } } }))
    }


  return {
    handleCountry, 
    handleCity,
    handleStreetName
  }
}

export default useAdress