import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';

import Header from './Components/Header';
import Infos from './Components/Infos';
import Menus from './Components/Menus';


function App(){
  const presentation = "presentation"
  const cart = "panier";
  const principale = "produit"
  const [filter,filtrage]=useState('')
  const [filter1,filtrage2]=useState('')
  const [page,modifpage]=useState(presentation)
    return (
      <div className="App">
        <Header filter={filter} filtrage={filtrage} filtrage2={filtrage2}/>
        <Menus principale={principale} modifpage={modifpage}/>
        <Infos presentation={presentation} cart={cart} principale={principale}  filter={filter} filter1={filter1} Page={page}/>
        <Footer />
      </div>   
      );
}

export default App;
