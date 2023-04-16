import React, {useState, useEffect} from "react";
import Entry from "./Entry";

const RestApi = () => {
    useEffect(() => { fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => setData(json)) }, [])

const [data, setData] = useState();

if (data === null) {
    return <div>
        <h1>Loading</h1>
    </div>
} else {

return (
   data.map((user) => {
    return <Entry
        key={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
    />
   })
)}
    
    


}

export default RestApi;