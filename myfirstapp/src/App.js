import React from 'react'
import Home from './Component/Home'
import Login from './Component/Login'
import Register from './Component/Register'
import ArtworkDetail from './Component/ArtworkDetail'
import Cart from './Component/Cart'
import Checkout from './Component/Checkout'
import {Switch,Route, Redirect} from 'react-router-dom'


function App() {
  return (
   <>
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/login" component={Login}/>
     <Route  exact path="/register" component={Register}/>
     <Route  exact path="/artworkdetail" component={ArtworkDetail}/>
     <Route  exact path="/cart" component={Cart}/>
     <Route   exact path="/checkout" component={Checkout}/>
     <Redirect to="/"/>
    <Home/>
    </Switch>
    </>
 
  );
}

export default App;
