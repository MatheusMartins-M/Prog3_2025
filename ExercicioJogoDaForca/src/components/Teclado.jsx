export default function Teclado (){
    const tecla = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
        'V', 'W', 'X', 'Y', 'Z'
    ];

    return(
        <div className="teclado">
            {tecla.map((letra) => (
                <button key={letra}>{letra}</button>
            ))}
        </div>
    );
}