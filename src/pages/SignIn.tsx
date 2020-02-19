import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonLoading
} from "@ionic/react";

import { logoGoogle, logoFacebook } from 'ionicons/icons'
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';

import firebaseApp, { googleProvider, facebookProvider } from '../services/firebase';
import { useHistory } from "react-router";
const SignIn = ({
  /** These props are provided by withFirebaseAuth HOC */
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
}: WrappedComponentProps) => {
  const [showLoading, setShowLoading] = useState(false);
  const history = useHistory()
  return (
    <IonPage>
      <IonContent className="main-background ion-padding">
        <IonItem className="transparent-background">
          <IonLabel color="white" className="title">
            Correo:
        </IonLabel>
          <IonInput color="white" type="email" />
        </IonItem>
        <IonItem className="transparent-background">
          <IonLabel color="white" className="title">
            Contraseña:
        </IonLabel>
          <IonInput color="white" type="password" />
        </IonItem>
        <IonButton className="ion-padding" color="tertiary" expand="block">
          Iniciar sesion
      </IonButton>
        <IonButton className="ion-padding" color="dark" expand="block">
          Registrarme
      </IonButton>
        <IonButton onClick={() => {
          setShowLoading(true);
          signInWithGoogle();
        }} className="ion-padding" color="orange" expand="block">
          <IonIcon slot="end" icon={logoGoogle} />
          Iniciar sesion con google
      </IonButton>
        <IonButton onClick={signInWithFacebook} className="ion-padding" expand="block">
          <IonIcon slot="end" icon={logoFacebook} />
          Iniciar sesion con facebook
      </IonButton>
        <IonButton className="ion-padding" color="default" expand="block">
          Olvidé mi contraseña
      </IonButton>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Por favor espere...'}
          duration={15000}
        />
      </IonContent>
    </IonPage>
  )
};

const providers = {
  googleProvider,
  facebookProvider
};

const firebaseAppAuth = firebaseApp.auth()

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);