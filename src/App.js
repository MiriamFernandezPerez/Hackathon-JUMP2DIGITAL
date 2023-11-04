import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import ViewMore from './ViewMore/ViewMore';


function App() {
  //Creo un estado para almacenar el número de página. 
  const [page, setPage] = useState(1);
  //Creo un estado para almacenar los datos de la paginación. 
  const [infoPage, setInfoPage] = useState([]);
  //Creo un estado para almacenar los datos de los personajes. 
  const [characters, setCharacters] = useState([]);
  //Creo un estado para mostrar u ocultar el botón "Cargar Más"
  const [showButton, setShowButton] = useState(true);
  //CReo un estado para almacenar el valor del input
  const [search, setSearch] = useState("");
  
  //Creo una variable para almacenar la URL de consulta a la API que irá cambiando según el estado de page y search
  let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;


  //Hago uso del UseEffect para llamar a la API, con una dependencia para que cambie según los datos vayan variando
  useEffect(() => {
    (async function () {
      let response = await fetch(url).then((res) => res.json());
      //Almaceno por separado la info para controlar la paginación
      setInfoPage(response.info);
      //Almaceno los datos recibidos y los concateno para ir mostrando todos a medida que el usuario pulsa el botón "Cargar Más"
      let data = response.results;
      setCharacters([...characters, ...data]);
    })();
  }, [url]);

  
  const handleClick = () => {
    let next = infoPage.next;
    // El botón "Cargar Más" estará siempre visible hasta que la API nos entregue la última página, ya que el valor de next === null
    next === null ? (setShowButton(false)) : (setPage(page+1));
  }

  return (
    <div className="App">
      <Header />
      <Navbar setSearch={setSearch} setPage={setPage} setCharacters={setCharacters}/>
      <h2>Lista de personajes</h2>
      {
        //Si la información de la página viene null, que no muestre nada, sino que muestre el contenido
        page === null ? ("") : (
          <div className='App-container'>
            <div className='App-grid'>
            {characters.map((character) => {
                return <Card key={character.id}
                  name={character.name}
                  gender={character.gender}
                  status={character.status}
                  species={character.species}
                  image={character.image}
                  ></Card>
              })}
            </div>
            {
              //Hacemos un renderizado condicional para mostrar u ocultar el botón "Cargar Más"
              //Se muestra siempre que haya más páginas que mostrar y siempre que no se haya hecho una búsqueda
              showButton === true  ? (
                <ViewMore onClick={handleClick} className="ViewMore"></ViewMore>
              ) : ("")
        }
      </div>
      )}
        
    </div>
  );
}

export default App;
