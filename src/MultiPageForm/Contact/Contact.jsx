import { Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../App";
import {motion} from 'framer-motion'
import useContact from "./useContact";

const Contact = () => {
  const { formData, setFormData } = useContext(DataContext);

  const { handleName, handleSurname, handleEmail, handleNumber } =
    useContact(setFormData);

  const { contact } = formData;
  const { name, surName, email, phoneNumber } = contact;

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Contact</h1>
      <Stack width={200} spacing={3}>
        <TextField
          value={name}
          onChange={handleName}
          id="standard-basic"
          label="Name"
          variant="standard"
          error={name === ""}
          helperText={name === "" ? "Name is required" : ""}
        />
        <TextField
          value={surName}
          onChange={handleSurname}
          id="standard-basic"
          label="Surname"
          variant="standard"
          error={surName === ""}
          helperText={surName === "" ? "Surname is required" : ""}
        />
        <TextField
          value={email}
          onChange={handleEmail}
          id="standard-basic"
          label="e-mail"
          variant="standard"
          error={email === ""}
          helperText={email === "" ? "Email is required" : ""}
        />
        <TextField
          value={phoneNumber}
          onChange={handleNumber}
          id="outlined-number"
          label="Phone Number"
          type="number"
          error={phoneNumber === ""}
          helperText={phoneNumber === "" ? "Phone number is required" : ""}
        />
      </Stack>
    </motion.div>
  );
};

export default Contact;
