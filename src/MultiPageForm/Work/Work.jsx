import { MenuItem, Select, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../App";
import useWork from "./useWork";

const Work = () => {
    const { formData, setFormData } = useContext(DataContext)

    const properties = useWork(setFormData);


    return <>
        <h1>Work</h1>
        <Stack width={200} spacing={3}>
            <TextField value={formData.work.companyName} onChange={properties.handleCompanyName} id="standard-basic" label="Company Name" variant="standard" />
            <TextField value={formData.work.jobPosition} onChange={properties.handleJobPosition} id="standard-basic" label="Job Position" variant="standard" />
            <Stack width={200} spacing={7} direction={"row"}>
                <TextField
                    value={formData.work.salary}
                    onChange={properties.handleSalary}
                    id="outlined-number"
                    label="Yearly Salary"
                    type="number"
                />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.work.currency}
                    label="Currency"
                    onChange={properties.handleCurrency}
                >
                    {properties.currencies.map((content) => {
                        return <MenuItem key={content.id} value={content.value}>{content.label}</MenuItem>
                    })}
                </Select>
            </Stack>
        </Stack>
    </>
}

export default Work;