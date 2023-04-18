
const useContact = (setFormData) => {
   
    const handleName = (e) => {
        setFormData((prev => {return {...prev, contact: {...prev.contact, name: e.target.value}}}))
    }
    
    const handleSurname = (e) => {
      setFormData((prev => {return {...prev, contact: {...prev.contact, surName: e.target.value}}}))
    }
    
    const handleEmail = (e) => {
      setFormData((prev => {return {...prev, contact: {...prev.contact, email: e.target.value}}}))
    }
    
    const handleNumber = (e) => {
     setFormData((prev => {return {...prev, contact: {...prev.contact, phoneNumber: e.target.value}}}))
    }

    return {
        handleName,
        handleSurname,
        handleEmail,
        handleNumber
    }
}

export default useContact;