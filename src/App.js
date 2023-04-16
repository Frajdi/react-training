import FilterList from "./FilterList";
import Accordion from "./Accordion/Accordion";
import ImageSlider from "./ImageSlider";
import CheckList from "./CheckList";
import Form from "./LoginForm/Form";
import RestApi from "./RestApi/RestApi";

function App() {
  return <>
    <FilterList />
    <hr></hr>
    <Accordion/>
    <hr></hr>
    <ImageSlider />
    <hr></hr>
    <CheckList />
    <hr></hr>
    <Form />
    <hr></hr>
    <RestApi />
    </>
  
}

export default App;
