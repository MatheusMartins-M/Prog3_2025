import { useState } from "react";
import { verso, listaCartas } from "../Deck.js";

export default function Carta() {
    const [cartas, setCartas] = useState(
        listaCartas.map((carta) => ({
            id: carta.id,
            valor: carta.valor,
            img: carta.img,
            virada: false,
        }))
    )

    function viraCarta(id) {
        setCartas((cartas) => cartas.map((carta) =>
            carta.id === id ? { ...carta, virada: !carta.virada } : carta
          )
        );
    }   
    return (
      <>
        {cartas.map((carta) =>
          carta.virada ? (
            <img key={carta.id} src={carta.img} onClick={() => viraCarta(carta.id)} />
          ) : (
            <img key={carta.id} src={verso} onClick={() => viraCarta(carta.id)} />
          )
        )}
      </>
    );
}