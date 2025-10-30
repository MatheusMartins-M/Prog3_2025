import { useState } from "react"

export default function Forca(props) {
    
    return (
        <>
            <div className="Teclado">
                {props.palavra.split("").map((letra, index) => (
                    <button key={index}>{
                        props.letrasTentadas.includes(
                            letra.toUpperCase()) ? letra.toUpperCase() : "-"}</button>
                ))}
            </div>
        </>
    )
}