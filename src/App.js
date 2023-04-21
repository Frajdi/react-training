// import FilterList from "./FilterList";
// import Accordion from "./Accordion/Accordion";
// import ImageSlider from "./ImageSlider";
// import CheckList from "./CheckList";
// import Form from "./LoginForm/Form";
// import RestApi from "./RestApi/RestApi";
import Contact from "./MultiPageForm/Contact/Contact";
import Adress from "./MultiPageForm/Adress/Adress";
import Work from "./MultiPageForm/Work/Work";
import Submit from "./MultiPageForm/Submit";
import { Home} from "./MultiPageForm/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

function App() {

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "adress",
          element: <Adress />,
        },
        {
          path: "work",
          element: <Work />,
        },
      ],
    },
    {
      path: "submit",
      element: <Submit />
    }
  ]);

  return (
    <>
      <DataContext.Provider value={{ formData, setFormData }}>
        <RouterProvider router={router} />  
        </DataContext.Provider>
      {/* <FilterList />
    <hr></hr>
    <Accordion/>
    <hr></hr>
    <ImageSlider />
    <hr></hr>
    <CheckList />
    <hr></hr>
    <Form />
    <hr></hr>
    <RestApi /> */}
    </>
  );
}

export default App;
