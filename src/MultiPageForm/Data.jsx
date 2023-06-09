import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import { motion } from "framer-motion";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";
import useWork from "./Work/useWork";
import { Switch } from "./Components/Switch";
import { Typography } from "@mui/material";
import useAdress from "./Adress/useAdress";
import useContact from "./Contact/useContact";

export const Data = () => {
  const { formData, setFormData } = useContext(DataContext);

  const {handleCity} = useAdress(setFormData)
  const {handleCurrency} = useWork(setFormData)
  const {handleEmail} = useContact(setFormData)
  const fakeEvent = {target: {value: ''}}
  const [rerender, setRerender] = useState(true)

  const handleRestartForm = (formData) => {
    for (const key in formData) {
      if(typeof formData[key] === 'string'){
        formData[key] = ''
      }else{
        handleRestartForm(formData[key])
      }
    }
    return formData
  }

  const setEmptyData = () => {
    //since we are updating the form data context we want to see a real time update in every page of ui 
    // se we call here every state update from each of our pages so what we are doing is calling the set functions
    //of every useContext instance in order to triger an update evreywhere the context data is distributed to
    setFormData(handleRestartForm(formData))
    setRerender((prev) => !prev)
    handleCity(fakeEvent)
    handleCurrency(fakeEvent)
    handleEmail(fakeEvent)
  }

  const navigate = useNavigate();

  const properties = useWork(formData);

  const getSymbol = (currencyArray, label) => {
    try {
      const currentCurrencie = currencyArray.find(
        (item) => item.value === label
      );
      return currentCurrencie.label;
    } catch {
      return "";
    }
  };

  const onSubmit = () => {
    navigate("/submit");
  };

  function createData(titles, data) {
    return { titles, data };
  }

  const { contact, adress, work } = formData;

  const { name, surName, email, phoneNumber } = contact;

  const { country, city, streetName } = adress;

  const { companyName, jobPosition, salary, currency } = work;

  const rows = [
    createData("Name", name),
    createData("Surname", surName),
    createData("Email", email),
    createData("Phone Number", phoneNumber),
    createData("Country", country),
    createData("City", city),
    createData("Street Name", streetName),
    createData("Company Name", companyName),
    createData("Job Position", jobPosition),
    createData(
      "Salary",
      salary + " " + getSymbol(properties.currencies, currency)
    ),
  ];

  return (
    <Stack  alignItems='center'>
          <motion.div
          style={{overflow: 'hidden'}}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 585, opacity: 1 }}
            transition={{ duration: 1 }}
          >
      <TableContainer sx={{ width: "500px" }} component={Paper}>
        <Table sx={{ width: "500px" }} aria-label="customized table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d2" }}>
              <TableCell sx={{ color: "white" }}>{name}'s data</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{ width: "100px", backgroundColor: "#c8d9ed" }}
                    align="center"
                  >
                    {row.titles}
                  </TableCell>
                  <TableCell
                    sx={{ width: "100px", backgroundColor: "#e1f1fd" }}
                    align="center"
                  >
                    {row.data}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
      </TableContainer>
          </motion.div>
      <Switch submit={onSubmit} restartForm={setEmptyData} />
           <motion.div
           initial={{ width: 0}}
           animate={{width: '100%'}}
           transition={{duration: 1}}
           >     
            <Stack direction='row' justifyContent={'space-between'} width='100%'>
            <Typography variant="h6" color={'#D32F2F'}>Delete</Typography>
            <Typography variant="h6" color={'#1976D2'}>← Slide →</Typography>
            <Typography variant="h6" color={'#001E3C'}>Submit</Typography>
            </Stack>
            </motion.div>
    </Stack>
  );
};

{/* <Button onClick={onSubmit} variant="contained" sx={{ height: 40 }}>
  Submit
</Button> */}