import React,{useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import './App.css';

Amplify.configure(config)

function App() {
  return (
    <div className="App">
     <Header/>
     <Switch>
       <Route exact path="/">
        <Home />
       </Route>
       <Route exact path="/ofertas">
          Ofertas
       </Route>
       <Route exact path="/bevidas">
          bevidas
       </Route>
       <Route exact path="/create">
         create a product
       </Route>
       <Route exact path="/cart">
         cart
       </Route>
       <Route exact path="/especiales">
        especiales
       </Route>
     </Switch>
    </div>
  );
}

export default App;
