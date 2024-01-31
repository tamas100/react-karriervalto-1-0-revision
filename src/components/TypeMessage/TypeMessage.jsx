import React from "react";
import "./TypeMessage.css"

function TypeMessage({val}) {
    return <div className="type-message">{typeof val}</div>
}

export default TypeMessage;