import React,{Fragment} from 'react';
import Header from './components/Header.component';
import Formulario from './components/Formulario.component';

function App() {
  return (
    <Fragment>
      <Header titulo="Buscador de noticias"></Header>

      <div className="container white">
          <Formulario/>
      </div>
    </Fragment>
  );
}

export default App;
