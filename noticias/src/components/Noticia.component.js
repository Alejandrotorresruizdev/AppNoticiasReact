import React from "react";

export const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <div className="col s12 m2 l4">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
          <span className="card-title">{source.name}</span>
        </div>

        <div className="card-content">
          <h5>{title}}</h5>
          <p>{description}}</p>
        </div>

        <div className="card-action center">
            <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waver-light btn">Ver noticia Completa</a>
        </div>

      </div>
    </div>
  );
};

export default Noticia;
