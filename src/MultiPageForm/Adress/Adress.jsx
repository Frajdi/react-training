import { Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../App";
import useAdress from "./useAdress";

const Adress = () => {

    const {formData, setFormData} = useContext(DataContext)
    const {handleCountry, handleCity, handleStreetName} = useAdress(setFormData)

    const { adress } = formData;
    const { country, city, streetName } = adress;

    return <>
        <h1>Adress</h1>
        <Stack width={200} spacing={3}>
            <TextField 
            value={country} 
            onChange={handleCountry} 
            id="standard-basic" 
            label="Country" 
            variant="standard"
            error={country === ''}
            helperText={country === ''? 'Country name is required': ''}
            />
            <TextField 
            value={city} 
            onChange={handleCity} 
            id="standard-basic" 
            label="City" 
            variant="standard"
            error={city === ''}
            helperText={city === ''? 'City name is required': ''}
            />
            <TextField 
            value={streetName} 
            onChange={handleStreetName} 
            id="standard-basic" 
            label="Street Name" 
            variant="standard"
            error={streetName === ''}
            helperText={streetName === ''? 'Street name is required': ''}
            />
        </Stack>
    </>
}

export default Adress;