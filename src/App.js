import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
// import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Login from './Components/Login';
import Signup from './Components/Signup';
 
function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        {/* <Alert/> */}
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
