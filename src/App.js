import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Practise from './pages/Practise';
import NotFound from './pages/NotFound';


const App = (props) => {

   const routes = (
      <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/about' component={About} />
         <Route path='/practise' component={Practise} />
         <Route component={NotFound} />
      </Switch>
   );

   return (
      <>
         {routes}
      </>
   );
};

export default App;
