import { Checkbox } from "@mui/material";
import React from "react";
import { useState } from "react";

const CheckList = () => {
const [citizen, setCitizen] = useState();
const [age, setAge] = useState();

const handleAge = (event) => {
    setAge(event.target.checked);
}

const handleCitizen = (event) => {
    setCitizen(event.target.checked);
}



return <div>
    <h1>Are you a citizen : {citizen ? "Yes" : "No"}</h1>
    <h1>Are you over 21 : {age ? "Yes" : "No"}</h1>
    <label>Are you a citizen?</label>
    <Checkbox onChange={(event) => {handleCitizen(event)}}></Checkbox>
    <label>Are you over 21?</label>
    <Checkbox onChange={(event) => {handleAge(event)}}></Checkbox>
</div>
}

export default CheckList;