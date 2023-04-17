import { Stack, TextField } from "@mui/material";

const Adress = () => {
    return <>
    <h1>Adress</h1>
    <Stack width={200} spacing={3}>
    <TextField id="standard-basic" label="Country" variant="standard" />
    <TextField id="standard-basic" label="City" variant="standard" />
    <TextField id="standard-basic" label="Street Name" variant="standard" />
    </Stack>
    </>
}

export default Adress;