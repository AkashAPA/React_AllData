import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './Login';
import Home from './Components/Pages/Home';
import PersonalDetails from './Components/Pages/PersonalDetails';
import Table from './Components/Table/Table';
import LoginFormY from './Components/Forms/LoginFormY';
import DynamicForm from './Components/Forms/DynamicForm';
import Sidebar from './Components/Pages/Sidebar';
import ReactMultiCarousel from './Components/Carousel/ReactMultiCarousel';
import ToggleCard from './Components/ToggleCards/ToggleCard';
import ShoppingCart from './Components/Ecommerce/ShoppingCart.jsx';
import TimerLoading from './Components/Timer/TimerLoading';
import Setting from './Components/Setting/Setting';
import CarSeller from './Components/SellerApp/CarSeller';
import NewNav from './Components/Navbar/NewNav';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/Home' exact component={Home} />
          
          <Route path='/Form' exact component={PersonalDetails} /> 
          <Route path='/Table' exact component={Table} /> 
          <Route path='/FormikForm' exact component={LoginFormY} /> 
          <Route path='/DynamicForm' exact component={DynamicForm} /> 
          <Route path='/Sidebar' exact component={Sidebar} /> 
          <Route path='/Carousel' exact component={ReactMultiCarousel} /> 
          <Route path='/ToggleCards' exact component={ToggleCard} /> 
          <Route path='/Ecommerce' exact component={ShoppingCart} /> 
          <Route path='/Timer' exact component={TimerLoading} /> 
          <Route path='/Setting' exact component={Setting} /> 
          <Route path='/CarSeller' exact component={CarSeller} /> 
          <Route path='/NewNav' exact component={NewNav} /> 
          <Route path='/Signup' exact component={Signup} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
