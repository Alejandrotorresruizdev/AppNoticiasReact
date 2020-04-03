import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header.component";
import Formulario from "./components/Formulario.component";
import ListadoNoticias from "./components/ListadoNoticias.component";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=3a2c39b7ab344eb0aa64c949a5805bd6`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"></Header>

      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />

        <ListadoNoticias noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
