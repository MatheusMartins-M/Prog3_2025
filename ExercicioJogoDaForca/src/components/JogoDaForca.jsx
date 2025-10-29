//import { useState } from "react";
import Forca from "./Forca";
import Teclado from "./Teclado";

export default function JogoDaForca(props){
    const palavra = props.palavra
    //const [tentativas, setTentativas] = useState(3);

    return(
        <div>
            <Forca palavra={palavra} />
            <br/>
            <Teclado />
            <br/>
            
        </div>
    );
};