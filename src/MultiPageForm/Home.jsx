import { useState } from "react";
import { Stack, Tab, Tabs } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Data } from "./Data";

export const Home = () => {
  const navigate = useNavigate();
  const params = useLocation();

  const currentPath = (path) => {
    if (path === "/") {
      return null;
    } else {
      return path;
    }
  };

  const [activeTab, setActiveTab] = useState(currentPath(params.pathname));

  function handleChange(event, newValue) {
    setActiveTab(newValue);
    navigate(newValue);
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
        <Tab value="/contact" label="Contact" />
        <Tab value="/adress" label="Adress" />
        <Tab value="/work" label="Work" />
      </Tabs>
      <Stack direction={"row"} spacing={4}>
          <Outlet />
        <Data />
      </Stack>
    </>
  );
};
