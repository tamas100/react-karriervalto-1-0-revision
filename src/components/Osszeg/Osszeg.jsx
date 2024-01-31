import React from 'react'

export default function Osszeg({num1, num2}) {
    const condition = (typeof  num1 !== "number" || typeof num2 !== "number");
    return (
        <div>
        {/*Le kell ellenőrízni, hogy számok-e a props-ok*/}
        {/*Aztán összeadjuk őket*/}
        {
            condition ? "Érvénytelen Művelet" : num1 + num2
        }
        </div>
    )
}
