import React from 'react';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer class='items'/>
    </div>
  );
};

export default App;