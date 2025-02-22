import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink, BrowserRouter,
} from 'react-router-dom';
import './images/logowhite.png';
import './App.css';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs/AboutUs";
import Prices from "./pages/Prices/Prices";
import RepairVisit from "./pages/RepairVisit/RepairVisit";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import './style.scss';
import Admin from "./pages/Admin/Admin";
//stylowanie
// ROUTER

function App() {
  return (
      <BrowserRouter>
          <div className='container'>
          <MainContent>
              <div>
                <Navbar/>
                <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path="/aboutus" component={AboutUs}/>
                      <Route exact path='/prices' component={Prices} />
                      <Route path='/repairvisit/:step' component={RepairVisit} />
                      <Route path='/admin' component={Admin}/>
                </Switch>
              </div>
          </MainContent>
          </div>
      </BrowserRouter>
  );
}

export default App;
