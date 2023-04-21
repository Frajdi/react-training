import React, { useContext } from "react";
import { DataContext } from "../App";

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

export const Data = () => {
  const { formData } = useContext(DataContext);

  const navigate = useNavigate();

  const properties = useWork(formData);

  const getSymbol = (currencyArray, label) =>{
    try{
      const currentCurrencie = currencyArray.find(item => item.value === label)
      return currentCurrencie.label
    }catch{
      return ''
    } 
  }
    
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
      createData("Salary", salary + " " + getSymbol(properties.currencies, currency) ),
    ];

    return (
      <Stack>
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
        <Button onClick={onSubmit} variant="contained" sx={{ height: 40 }}>
          Submit
        </Button>
      </Stack>
    );
  };


