
const useAdress = (setFormData) => {

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

export default useAdress;