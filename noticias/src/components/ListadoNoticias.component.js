import React from "react";
import Noticia from "./Noticia.component";

const ListadoNoticias = ({ noticias }) => (
  <div className="row">
    {noticias.map(noticia => {
      return <Noticia key={noticia.url} noticia={noticia} />;
    })}
  </div>
);

export default ListadoNoticias;
