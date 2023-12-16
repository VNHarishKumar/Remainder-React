import React, {useState, useEffect} from 'react';
import NavBar from './NavBar/NavBar';
import CardHolder from './CardHolder/CardHolder';
import './App.scss';


function App() {

 

  return (
    <div>


      <NavBar  />
    
      <CardHolder name="Show Description" />
    </div>
    
  );
}

export default App;
