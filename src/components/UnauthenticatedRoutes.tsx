import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const UnauthenticatedRoutes = () => (<IonReactRouter>
    <IonRouterOutlet>
        <Route path="/signIn" render={() => <SignIn />} />
        <Route path="/signUp" component={SignUp} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/signIn" />} />
    </IonRouterOutlet>
</IonReactRouter>)
export default UnauthenticatedRoutes;
