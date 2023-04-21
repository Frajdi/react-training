import { FormControl, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../App";
import useWork from "./useWork";

const Work = () => {
    const { formData, setFormData } = useContext(DataContext)

    const properties = useWork(setFormData);

    const { work } = formData;
    const { companyName, jobPosition, salary, currency } = work;

    return <>
        <h1>Work</h1>
        <Stack width={200} spacing={3}>
            <TextField 
            value={companyName} 
            onChange={properties.handleCompanyName} 
            id="standard-basic" 
            label="Company Name" 
            variant="standard" 
            error={companyName === ''}
            helperText={companyName === ''? 'Company name is required': ''}
            />
            <TextField 
            value={jobPosition} 
            onChange={properties.handleJobPosition} 
            id="standard-basic" 
            label="Job Position" 
            variant="standard"
            error={jobPosition === ''}
            helperText={jobPosition === ''? 'Job position is required': ''} 
            />
            <Stack width={200} spacing={7} direction={"row"}>
                <TextField
                    value={salary}
                    onChange={properties.handleSalary}
                    id="outlined-number"
                    label="Yearly Salary"
                    type="number"
                    error={salary === ''}
                    helperText={salary === ''? "Broke nigga": ""}
                />
                <FormControl error={currency === ''}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    label="Currency*"
                    onChange={properties.handleCurrency}
                >
                    {properties.currencies.map((content) => {
                        return <MenuItem key={content.id} value={content.value}>{content.label}</MenuItem>
                    })}
                </Select>
                </FormControl>
            </Stack>
        </Stack>
    </>
}

export default Work;