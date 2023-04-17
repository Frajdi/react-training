import { Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./Home";

const Contact = () => {
    
    const { formData, setFormData } = useContext(DataContext)
    
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

    return <>
        <h1>Contact</h1>
       <Stack width={200} spacing={3}>
        <TextField value={formData.contact.name} onChange={handleName} id="standard-basic" label="Name" variant="standard" />
        <TextField value={formData.contact.surName} onChange={handleSurname} id="standard-basic" label="Surname" variant="standard" />
        <TextField value={formData.contact.email} onChange={handleEmail} id="standard-basic" label="e-mail" variant="standard" />
        <TextField
            value={formData.contact.phoneNumber}
            onChange={handleNumber} 
            id="outlined-number"
            label="Phone Number"
            type="number"
        />
        </Stack>
    </>
}

export default Contact;