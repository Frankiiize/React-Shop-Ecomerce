import React from 'react';
import '../styles/global.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'



import { Layaout } from '../containers/Layaout.jsx';


import { Home } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import { CreateNewPassword } from '../pages/CreatePassword.jsx';
import { Login } from '../pages/Login.jsx';
import { MyAccount } from '../pages/MyAccount.jsx';
import { MyOrders } from '../pages/MyOrders.jsx';






const App = () => {
	return (
    <BrowserRouter>
      <Layaout>
        <Switch>
          <Route exact path="/" component={Home} />     
          <Route exact path="/login" component={Login} />
          <Route exact path="/create-password" component={CreateNewPassword} />
          <Route exact path="/my-account" component={MyAccount} />
          <Route exact path="/my-orders" component={MyOrders} />

          <Route path="*" component={NotFound} /> 
        </Switch>
      </Layaout>
    </BrowserRouter>
	);
}

export default App;