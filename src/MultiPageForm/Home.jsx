import { useState } from "react";
import { Button, Stack, Tab, Tabs } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useNavigate, useMatch } from "react-router-dom";
import Data from "./Data";


export const Home = () => {

    const [formData, setFormData] = useState(
        {
            contact: {
                name: "",
                surName: "",
                email: "",
                phoneNumber: "",
            },
            adress: {
                country: "",
                city: "",
                streetName: "",
            },
            work: {
                companyName: "",
                jobPosition: "",
                salary: "",
                currency: "",
            },
        });


    const {params} = useMatch('/:path')
    
    const [activeTab, setActiveTab] = useState(params.path);

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
        navigate(newValue);
    };

    const onSubmit = () => {
        navigate('/submit')
    }

    return (
        <>
            <Tabs
                value={activeTab}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                centered
            >
                <Tab value="contact" label="Contact" />
                <Tab value="adress" label="Adress" />
                <Tab value="work" label="Work" />
            </Tabs>
            <Stack direction={"row"} spacing={4}>
                <Outlet />
                <Data />
            <Button onClick={onSubmit} variant="contained" sx={{height: 40}}>Submit</Button>
            </Stack>
        </>
    );
};

