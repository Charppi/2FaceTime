import React from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon
} from "@ionic/react";

import {logoGoogle,logoFacebook} from 'ionicons/icons'

const SignIn: React.FC = () => (
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
      <IonButton className="ion-padding" color="orange" expand="block">
      <IonIcon slot="end" icon={logoGoogle} />
        Iniciar sesion con google
      </IonButton>
      <IonButton className="ion-padding" expand="block">
      <IonIcon slot="end" icon={logoFacebook} />
        Iniciar sesion con facebook
      </IonButton>
      <IonButton className="ion-padding" color="default" expand="block">
        Olvidé mi contraseña
      </IonButton>
    </IonContent>
  </IonPage>
);

export default SignIn;
