import React from "react";
import InputSearchStyle from './InputSearch.styles';

const InputSearch = ({setSearch, setPage, setCharacters}) => {
    
    return (
        <InputSearchStyle type="text" placeholder="Busca un personaje" onChange={(e) =>{
            //Capturo el valor del input
            let inputText = e.target.value;
            //Le asigno el valor del input al estado search
            setSearch(inputText);
            //Inicializo el array characters para que me devuelva los personajes filtrados por nombre
            setCharacters([]);
            //Inicializo la página para que comience la búsqueda desde la primera por si el usuario ya ha ido avanzando con "Cargar Más"
            setPage(1);
        }}/>
    )
}
  
export default InputSearch;