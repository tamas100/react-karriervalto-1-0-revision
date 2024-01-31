import React from "react";

function TextSection({title, text}) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{text}</p>
            {/*ez egy komment*/}
        </section>
    )       
}

export default TextSection;