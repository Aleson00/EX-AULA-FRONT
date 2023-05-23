
import { useState } from "react"
function Lista() {
    const[texto, setTexto] = useState([]);
    const [inputTexto, setInputTexto] = useState("");
    
    const adicionarPalavra = () => {
        if (inputTexto.trim() !== ""){
            setTexto([...texto, inputTexto]);
            setInputTexto("");
    }}
    const removerItem = (index) => {
        const inputTexto = [...texto];
        inputTexto.splice(index, 1);
        setTexto(inputTexto);
    };
    

    return(       
        <div>
            <ul>
                {texto.map((texto, index) => (
                    <li key={index}>{texto}</li>
                ))}
            </ul>
            
            <input value={inputTexto} onChange={(e)=>{setInputTexto(e.target.value)}} type="text" id="mensagem-input" placeholder="Digite o item!"  />
            <button onClick={adicionarPalavra}>Adicionar</button>
            <button onClick={() => removerItem()}>Remover</button>

            
      </div>
            
      
    )
}

export default Lista;