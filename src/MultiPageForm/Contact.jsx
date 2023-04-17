import { Stack, TextField } from "@mui/material";

const Contact = () => {
    return <>
        <h1>Contact</h1>
       <Stack width={200} spacing={3}>
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Surname" variant="standard" />
        <TextField id="standard-basic" label="e-mail" variant="standard" />
        <TextField
            id="outlined-number"
            label="Phone Number"
            type="number"
        />
        </Stack>
    </>
}

export default Contact;