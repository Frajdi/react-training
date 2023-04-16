import React from "react";

const Entry = (props) => {
   
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.username}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Entry;