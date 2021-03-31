// import React from 'react'
// import Home from './Component/Home'
// import Navbar from './Component/Navbar';
// import Login from './Component/Login'
// import Register from './Component/Register'
// import ArtworkDetail from './Component/ArtworkDetail'
// import Cart from './Component/Cart'
// import Checkout from './Component/Checkout'
// import {Switch,Route, Redirect} from 'react-router-dom'


// function App() {
//   return (
//    <>
//    <Navbar/>
//    <Switch>
//      <Route exact path="/" component={Home}/>
//      <Route exact path="/login" component={Login}/>
//      <Route  exact path="/register" component={Register}/>
//      <Route  exact path="/artworkdetail" component={ArtworkDetail}/>
//      <Route  exact path="/cart" component={Cart}/>
//      <Route   exact path="/checkout" component={Checkout}/>
//      <Redirect to="/"/>
//     <Home/>
//     </Switch>
//     </>
 
//   );
// }

// export default App;



import React from 'react';
import Login from './Component/Login';
import Register from './Component/Register';
import Cart from './Component/Cart'
// import Checkout from './Component/Checkout'
import Home from './Component/Home';
import Navbar from './Component/Navbar';

import ArtworkDetail from './Component/ArtworkDetail';
 import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Redirect, Route, Switch} from  'react-router-dom';

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  {/* <Navbar1/> */}
      <Switch>
     
     <Route  exact path = "/" component ={Home}/>
     <Route path = "/login" component={Login}/>
     <Route path = "/register" component={Register}/>
     <Route path = "/artworkdetail" component={ArtworkDetail}/>
     <Route path = "/cart" component={Cart}/>
     {/* <Route path = "/checkout" component={Checkout}/> */}
    
     <Redirect to = "/"/>
   
   </Switch>
   </BrowserRouter>
   </>
   
  );
}

export default App;

