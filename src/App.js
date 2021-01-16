import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/pages/Home'
import AddRestaurant from './components/pages/AddRestaurant'
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
      <Router>
        <NavBar />
          <Switch>
            <Route path="/list" component={Home}/>
            <Route path="/add" component={AddRestaurant}/>
          </Switch>
        <Footer />
      </Router>
  )
}

export default App;
