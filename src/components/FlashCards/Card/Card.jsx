import React, {useState} from "react";

export default function Card({frontSide, backSide}) {
    const [isFront, changeFace] = useState(true);
    function handleClick() {
        changeFace(oldState => !oldState );
    }
    const text = isFront ? frontSide : backSide;
    const sideClass = isFront ? "front" : "back";
    const classList = `flash-cards flash-card ${sideClass}`
    return (
        <div className={classList} onClick={handleClick}>
            {text}
        </div>
    )
}

