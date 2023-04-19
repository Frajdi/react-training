import React, { useContext } from "react";
import { DataContext } from "../App";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);

//   const StyledTableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//       },
//     },
//   }))(TableRow);

const Data = () => { 
    const { formData } = useContext(DataContext)
    
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/submit')
    }

    function createData(titles, data) {
        return { titles, data };
      }
      
      const rows = [
        createData('Name', 159),
        createData('Surname', 237),
        createData('Email', 262),
        createData('Phone Number', 305),
        createData('Country', 356),
        createData('City', 356),
        createData('Street Name', 356),
        createData('Company Name', 356),
        createData('Job Position', 356),
        createData('Yearly Salary', 356),
      ];

    return (
        <Stack>
        <TableContainer sx={{width: '500px'}} component={Paper}>
          <Table sx={{width: '500px'}} aria-label="customized table">
            <TableHead>
              <TableRow sx={{backgroundColor: '#1976d2'}}>
                <TableCell sx={{color: 'white'}}>{formData.contact.name}'s data</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell  sx={{width: '100px', backgroundColor: '#c8d9ed'}} align="center">{row.titles}</TableCell>
                  <TableCell sx={{width: '100px' , backgroundColor: '#e1f1fd'}} align="center">{row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={onSubmit} variant="contained" sx={{height: 40}}>Submit</Button>
        </Stack>
      );
    }

    // return <Stack style={{}} direction={"column"}>
    //         <h1>{formData.contact.name}'s information</h1>
    //         <h2>Name:</h2>
    //         <h3>{formData.contact.name}</h3>
    //         <h2>Surname</h2>
    //         <h3>{formData.contact.surName}</h3>
    //         <h2>Email</h2>
    //         <h3>{formData.contact.email}</h3>
    //         <h2>Phone Number</h2>
    //         <h3>{formData.contact.phoneNumber}</h3>
    //         <h2>Country</h2>
    //         <h3>{formData.adress.country}</h3>
    //         <h2>City</h2>
    //         <h3>{formData.adress.city}</h3>
    //         <h2>Street Name</h2>
    //         <h3>{formData.adress.streetName}</h3>
    //         <h2>Company</h2>
    //         <h3>{formData.work.company}</h3>
    //         <h2>Job Position</h2>
    //         <h3>{formData.work.jobPosition}</h3>
    //         <h2>Salary</h2>
    //         <h3>{formData.work.salary}</h3>
    //         <h2>Currency</h2>
    //         <h3>{formData.work.currency}</h3>
    //         </Stack>
// }

export default Data;