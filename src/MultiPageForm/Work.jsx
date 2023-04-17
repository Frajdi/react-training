import { MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";

const Work = () => {

    const [value, setValue] = useState(10)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

const currencies = [
    {
        id: "1",
        value: "euro",
        label: "€"
    },
    {
        id: '2',
        value: 'dollar',
        label: '$'
    },
    {
        id: '3',
        value: 'bitcoin',
        label: '฿'
    },
    {
        id: '4',
        value: 'lek',
        label: 'L'
    }
]

    return <>
        <h1>Work</h1>
        <Stack width={200} spacing={3}>
            <TextField id="standard-basic" label="Company Name" variant="standard" />
            <TextField id="standard-basic" label="Job Position" variant="standard" />
            <Stack width={200} spacing={7} direction={"row"}>
                <TextField
                    id="outlined-number"
                    label="Yearly Salary"
                    type="number"
                />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Currency"
                    onChange={handleChange}
                >
                    {currencies.map((content) => {
                         return  <MenuItem value={content.value}>{content.label}</MenuItem>
                    })}
                </Select>
            </Stack>
        </Stack>
    </>
}

export default Work;