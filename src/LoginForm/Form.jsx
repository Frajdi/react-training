import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Form = () => {

// States for the form

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [successfulLogIn, setSuccessfulLogIn] = useState();



  const realCredentials = {
    name: "Frajdi",
    email: "frajdimalaj@gmail.com",
    password: "1234",
  };


// event handlers for the form

  const handleName = (e) => {
    const inputName = e.target.value;
    setInputData({ ...inputData, name: inputName });
  };

  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    setInputData({ ...inputData, email: inputEmail });
  };

  const handlePassword = (e) => {
    const inputPassword = e.target.value;
    setInputData({ ...inputData, password: inputPassword });
  };

  const handleSubmit = () => {
    if (
      inputData.name === realCredentials.name &&
      inputData.email === realCredentials.email &&
      inputData.password === realCredentials.password
    ) {
      setSuccessfulLogIn(true);
    } else {
      setSuccessfulLogIn(false);
    }
  };


// Form itself with conditional rendering

  if (successfulLogIn === true) {
    return <h1>Hello {inputData.name}</h1>;
  } else if (successfulLogIn === false) {
    return <h1>Log In Fucked Up</h1>;
  } else {
    return (
      <Card sx={{ m: "2 auto" }}>
        <Stack flexDirection="column">
          <TextField
            onChange={(e) => handleName(e)}
            sx={{ m: 2, width: "20%" }}
            label="Name"
          ></TextField>
          <TextField
            onChange={(e) => handleEmail(e)}
            sx={{ m: 2, width: "20%" }}
            label="Email"
          ></TextField>
          <TextField
            onChange={(e) => handlePassword(e)}
            type="password"
            sx={{ m: 2, width: "20%" }}
            label="Password"
          ></TextField>
          <Button
            onClick={() => handleSubmit()}
            sx={{ m: 2, width: "20%" }}
            variant="contained"
          >
            Log In
          </Button>
        </Stack>
      </Card>
    );
  }
};

export default Form;
