import React, { useContext } from "react"
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Submit = () => {
    const { formData } = useContext(DataContext)

const navigate = useNavigate();

const onHome = () => {
    navigate('/contact')
}

    return <>
        <h1>{formData.contact.name}'s information</h1>
        <h2>Name:</h2>
        <h3>{formData.contact.name}</h3>
        <h2>Surname</h2>
        <h3>{formData.contact.surName}</h3>
        <h2>Email</h2>
        <h3>{formData.contact.email}</h3>
        <h2>Phone Number</h2>
        <h3>{formData.contact.phoneNumber}</h3>
        <h2>Country</h2>
        <h3>{formData.adress.country}</h3>
        <h2>City</h2>
        <h3>{formData.adress.city}</h3>
        <h2>Street Name</h2>
        <h3>{formData.adress.streetName}</h3>
        <h2>Company</h2>
        <h3>{formData.work.company}</h3>
        <h2>Job Position</h2>
        <h3>{formData.work.jobPosition}</h3>
        <h2>Salary</h2>
        <h3>{formData.work.salary}</h3>
        <h2>Currency</h2>
        <h3>{formData.work.currency}</h3>
        <Button onClick={onHome} variant="contained" sx={{height: 40}}>Back to Form</Button>
    </>
}

export default Submit;