import React, { useContext } from "react"
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const Submit = () => {
    const { formData } = useContext(DataContext)

const navigate = useNavigate();

const onHome = () => {
    navigate('/contact')
}

    return <>
        <Typography variant="h2" color={'#1976D2'}>
        {formData.contact.name}'s information
      </Typography>
      <Typography variant="h4" color={'#1976D2'}>
        Name:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.contact.name}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        Surname:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.contact.surName}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        Email:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.contact.email}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        Phone Number:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.contact.phoneNumber}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        Country:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.adress.country}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        City:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.adress.city}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        Street Name:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.adress.streetName}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        Company Name:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.work.companyName}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        Job Position:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.work.jobPosition}
      </Typography>
        <Typography variant="h4" color={'#1976D2'}>
        Salary:
      </Typography>
      <Typography variant="h5" color={'#001E3C'}>
      {formData.work.salary}
      {formData.work.currency}
      </Typography>
        <Button onClick={onHome} variant="contained" sx={{height: 40}}>Back to Form</Button>
    </>
}

export default Submit;