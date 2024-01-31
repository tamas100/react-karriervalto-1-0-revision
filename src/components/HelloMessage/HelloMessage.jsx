import React from "react";
import "./HelloMessage.css";

function HelloMessage({name}) {
    return <div className="hello-message">Hello, {name}</div>
}

export default HelloMessage;