// import FilterList from "./FilterList";
// import Accordion from "./Accordion/Accordion";
// import ImageSlider from "./ImageSlider";
// import CheckList from "./CheckList";
// import Form from "./LoginForm/Form";
// import RestApi from "./RestApi/RestApi";
import Contact from "./MultiPageForm/Contact";
import Adress from "./MultiPageForm/Adress";
import Work from "./MultiPageForm/Work";
import {Home} from "./MultiPageForm/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/adress",
          element: <Adress />,
        },
        {
          path: "/work",
          element: <Work />,
        },
      ],
    },
  ]);

  return (
    <>
      
        <RouterProvider router={router} />
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
