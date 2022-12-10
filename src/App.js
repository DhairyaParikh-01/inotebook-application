import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>  
          <Route  path="/home">
              <Home/>
          </Route>
          <Route exact path="/about">
              <About />
          </Route>
      </Switch>
    </Router>    
    </>
  );
}

export default App;
