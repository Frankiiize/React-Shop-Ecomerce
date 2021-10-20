import React from 'react';
import '../styles/global.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'


import { Login } from '../containers/Login.jsx';
import { Layaout } from '../containers/Layaout.jsx';
import { RecoveryPassword } from '../containers/RecoveryPassword.jsx';

import { Home } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';


const App = () => {
	return (
    <BrowserRouter>
      <Layaout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route path="*" component={NotFound} /> 
        </Switch>
      </Layaout>
    </BrowserRouter>
	);
}

export default App;