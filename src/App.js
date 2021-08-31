import React from 'react';
import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Storeitem from './Frontend/Storeitem';
import Stockdetail from './Frontend/Stockdetail';
import Addnew from './Frontend/Addnew';
import Stockitem from './Frontend/Stockitem';
import Navigation from './Frontend/Navigation';


function App() {
  return (
  
     
    <BrowserRouter>
       <div className="App">
          
     
          <Switch>
             
             
             
             <Route path="/stockdetail" component={Stockdetail}/>
             <Route path="/Addnew" component={Addnew}/>
             <Route path="/details" component={Stockitem}/>
             <Route path="/" component={Storeitem}/>
            
            
            
              
            
             
             
             
           </Switch>
           
           </div>
   </BrowserRouter> 
       
     

    
  );
}

export default App






