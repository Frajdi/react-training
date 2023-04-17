import { Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./Home";

const Adress = () => {

    const { formData, setFormData } = useContext(DataContext)

    const handleCountry = (e) => {
        setFormData((prev => { return { ...prev, adress: { ...prev.adress, country: e.target.value } } }))
    }

    const handleCity = (e) => {
        setFormData((prev => { return { ...prev, adress: { ...prev.adress, city: e.target.value } } }))
    }

    const handleStreetName = (e) => {
        setFormData((prev => { return { ...prev, adress: { ...prev.adress, streetName: e.target.value } } }))
    }

    return <>
        <h1>Adress</h1>
        <Stack width={200} spacing={3}>
            <TextField value={formData.adress.country} onChange={handleCountry} id="standard-basic" label="Country" variant="standard" />
            <TextField value={formData.adress.city} onChange={handleCity} id="standard-basic" label="City" variant="standard" />
            <TextField value={formData.adress.streetName} onChange={handleStreetName} id="standard-basic" label="Street Name" variant="standard" />
        </Stack>
    </>
}

export default Adress;