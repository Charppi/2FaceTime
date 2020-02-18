import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonLoading } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

//Configuracion de firebase
import firebaseApp from './services/firebase'
//Configuracion de firebase


const App: React.FC = () => {
  const [isLoged, setIsLoged] = useState(false);
  const [isBusy, setIsBusy] = useState(true);
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      setIsLoged(user ? true : false);
      setIsBusy(false);
    });
  }, []);
  return (
    <IonApp>
      {isBusy
        ? <IonLoading
          isOpen={isBusy}
          onDidDismiss={() => setIsBusy(false)}
          message={'Por favor espere...'}
        />
        : <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" exact={true} render={() => (isLoged ? <Home /> : <Redirect to="/signIn" />)} />
            <Route path="/signIn" exact={true} render={() => (isLoged ? <Redirect to="/home" /> : <SignIn />)} />
            <Route path="/signUp" exact={true} render={() => (isLoged ? <Redirect to="/home" /> : <SignUp />)} />
            <Route exact path="/" render={() => <Redirect to="/signIn" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      }

    </IonApp>
  );
};

export default App;