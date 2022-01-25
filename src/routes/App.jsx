import React, { Suspense } from 'react';
import '../styles/global.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layaout } from '../containers/Layaout.jsx';
import { Home,  Categories } from '../pages/Home.jsx';
import {IntlProvider} from 'react-intl';
const NotFound = React.lazy(() => import('../pages/NotFound.jsx'));
const NewPassword = React.lazy(() => import('../pages/NewPassword.jsx'));
const Orders = React.lazy(() => import('../pages/Orders.jsx'));
const MyAccount = React.lazy(() => import('../pages/MyAccount.jsx'));
const CreateAccount = React.lazy(() => import('../pages/CreateAccount.jsx'));
const Login = React.lazy(() => import('../pages/Login.jsx'));

import { AppContext }  from '../context/AppContext.js';
import { ProductProvider } from '../context/ProductContex';
import { useInitialState } from '../hooks/useInitialState.js'
import { ProviderAuth } from '../context/AuthContext.js';
import { PrivateRoute } from '../containers/PrivateRoutes.jsx';
const initialStateStorage = {
  cart:[],
}

const localLanguaje = window.navigator.language.split("-")[0]
localStorage.setItem("cart",JSON.stringify(initialStateStorage))
console.log(localStorage)

const App = () => {
  const initialState = useInitialState();
  
	return (
    <AppContext.Provider value={initialState}>
      <ProductProvider >
        <IntlProvider locale={localLanguaje}>
          <ProviderAuth>
            <Suspense fallback={<div>Loading...</div>}>
              <BrowserRouter>
                <Layaout>
                  <Switch>
                    <Route exact  path="/" component={Home} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact  path="/categories/:id" component={Categories}/>
                    <Route exact path="/newPassword" component={NewPassword}/>
                    <Route exact path="/createAccount" component={CreateAccount}/>
                    <Route exact path="/recoveryPassword" component={NewPassword}/>
                    <PrivateRoute exact path="/orders">
                      <Orders/>
                    </PrivateRoute>
                    <PrivateRoute path="/myAccount">
                      <MyAccount />
                    </PrivateRoute>
                    <Route path="/*" component={NotFound}/> 
                  </Switch>
                </Layaout>
              </BrowserRouter>
            </Suspense>
          </ProviderAuth>
        </IntlProvider>
      </ProductProvider>
    </AppContext.Provider>

	);
}

export default App;