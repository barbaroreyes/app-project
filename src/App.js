import {Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/">
          Home
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
     </Switch>
    </div>
  );
}

export default App;
