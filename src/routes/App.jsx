import React from 'react';
import {IntlProvider} from 'react-intl'
import '../styles/global.css'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { Layaout } from '../containers/Layaout.jsx';
import { Home,  Categories } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import { NewPassword } from '../pages/NewPassword.jsx';
import { Login } from '../pages/Login.jsx';
import { MyAccount } from '../pages/MyAccount.jsx';
import { CreateAccount } from '../pages/CreateAccount.jsx';
import { Orders } from '../pages/Orders.jsx';

import { AppContext }  from '../context/AppContext.js';
import { ProductProvider } from '../context/ProductContex';
import { useInitialState } from '../hooks/useInitialState.js'
import { ProviderAuth } from '../context/AuthContext.js';
import { PrivateRoute } from '../containers/PrivateRoutes.jsx';


const localLanguaje = window.navigator.language.split("-")[0]


const App = () => {
  const initialState = useInitialState();
  
	return (
    <AppContext.Provider value={initialState}>
      <ProductProvider >
        <IntlProvider locale={localLanguaje}>
          <ProviderAuth>
            <BrowserRouter>
              <Layaout>
                <Switch>
                  <Route exact path="/"  >
                    <Redirect to="/React-Shop-Ecomerce"/>
                  </Route>
                  <Route exact  path="/React-Shop-Ecomerce/" >
                    <Home/>
                  </Route>

                  <Route exact path="/React-Shop-Ecomerce/login" component={Login}/>
                  <Route exact  path="/React-Shop-Ecomerce/categories/:id" >
                    <Categories
                    />
                  </Route>  
                  <Route exact path="/React-Shop-Ecomerce/newPassword" component={NewPassword}/>
                  <Route exact path="/React-Shop-Ecomerce/createAccount" component={CreateAccount}/>
                  <Route exact path="/React-Shop-Ecomerce/recoveryPassword" component={NewPassword}/>
                  <PrivateRoute exact path="/React-Shop-Ecomerce/orders">
                    <Orders/>
                  </PrivateRoute>
                  <PrivateRoute path="/React-Shop-Ecomerce/myAccount">
                    <MyAccount />
                  </PrivateRoute>
                  <Route path="/React-Shop-Ecomerce/*" component={NotFound}/> 
                  <Route path="/*" component={NotFound}/> 
                </Switch>
              </Layaout>
            </BrowserRouter>
          </ProviderAuth>
        </IntlProvider>
      </ProductProvider>
    </AppContext.Provider>

	);
}

export default App;