import { Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../App";
import useAdress from "./useAdress";

const Adress = () => {

    const {formData, setFormData} = useContext(DataContext)
    const {handleCountry, handleCity, handleStreetName} = useAdress(setFormData)

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