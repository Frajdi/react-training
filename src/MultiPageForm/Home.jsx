import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [activeTab, setActiveTab] = useState("contact");

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setActiveTab(newValue)
        navigate(newValue)
    }

    return <>
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
        <Outlet />
    </>
}

export default Home;