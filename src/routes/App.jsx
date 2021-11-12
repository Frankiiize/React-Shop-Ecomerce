import React from 'react';
import {IntlProvider} from 'react-intl'
import '../styles/global.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { Layaout } from '../containers/Layaout.jsx';
import { Clothes, Electronics, Forniture, Home, Toys, Others } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import { NewPassword } from '../pages/NewPassword.jsx';
import { Login } from '../pages/Login.jsx';
import { MyAccount } from '../pages/MyAccount.jsx';
import { CreateAccount } from '../pages/CreateAccount.jsx';
import { Orders } from '../pages/Orders.jsx';

import { AppContext }  from '../context/AppContext.js';
import { useInitialState } from '../hooks/useInitialState.js'


const localLanguaje = window.navigator.language.split("-")[0]


const App = () => {
  const initialState = useInitialState();
	return (
    <AppContext.Provider value={initialState}>
      <IntlProvider locale={localLanguaje}>
        <BrowserRouter>
          <Layaout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/React-Shop-Ecomerce/home/clothes" component={Clothes}/>     
              <Route exact path="/React-Shop-Ecomerce/home/electronics" component={Electronics}/>     
              <Route exact path="/React-Shop-Ecomerce/home/fornitures" component={Forniture}/>     
              <Route exact path="/React-Shop-Ecomerce/home/toys" component={Toys}/>     
              <Route exact path="/React-Shop-Ecomerce/home/others" component={Others}/>     
              <Route exact path="/React-Shop-Ecomerce/login" component={Login}/>
              <Route exact path="/React-Shop-Ecomerce/newPassword" component={NewPassword}/>
              <Route exact path="/React-Shop-Ecomerce/myAccount" component={MyAccount} />
              <Route exact path="/React-Shop-Ecomerce/createAccount" component={CreateAccount}/>
              <Route exact path="/React-Shop-Ecomerce/orders" component={Orders}/>
              <Route path="*" component={NotFound}/> 
            </Switch>
          </Layaout>
        </BrowserRouter>
      </IntlProvider>
    </AppContext.Provider>

	);
}

export default App;