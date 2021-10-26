import React from 'react';
import '../styles/global.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'



import { Layaout } from '../containers/Layaout.jsx';


import { Home } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import { NewPassword } from '../pages/NewPassword.jsx';
import { Login } from '../pages/Login.jsx';
import { MyAccount } from '../pages/MyAccount.jsx';
import { Checkout } from '../pages/Checkout.jsx';
import { CreateAccount } from '../pages/CreateAccount.jsx';
import { Orders } from '../pages/Orders.jsx';






const App = () => {
	return (
    <BrowserRouter>
      <Layaout>
        <Switch>
          <Route exact path="/" component={Home} />     
          <Route exact path="/login" component={Login} />
          <Route exact path="/newPassword" component={NewPassword} />
          <Route exact path="/myAccount" component={MyAccount} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/createAccount" component={CreateAccount} />
          <Route exact path="/orders" component={Orders} />
          <Route path="*" component={NotFound} /> 
        </Switch>
      </Layaout>
    </BrowserRouter>
	);
}

export default App;