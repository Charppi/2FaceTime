import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import Home from '../pages/Home';

const AuthenticatedRoutes = () => (<IonReactRouter>
    <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
    </IonRouterOutlet>
</IonReactRouter>)

export default AuthenticatedRoutes;

