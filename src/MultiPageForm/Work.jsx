import { MenuItem, Select, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useContext } from "react";
import {DataContext} from '../MultiPageForm/Home'

const Work = () => {
    const {formData, setFormData} = useContext(DataContext)

    const [value, setValue] = useState('euro')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleCompanyName = (e) => {
        setFormData((prev => {return {...prev, work: {...prev.work, companyName: e.target.value}}}))
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

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
            <TextField value={formData.work.companyName} onChange={handleCompanyName} id="standard-basic" label="Company Name" variant="standard" />
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
                         return  <MenuItem key={content.id} value={content.value}>{content.label}</MenuItem>
                    })}
                </Select>
            </Stack>
        </Stack>
    </>
}

export default Work;