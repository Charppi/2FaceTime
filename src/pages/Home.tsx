import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonAvatar, IonLabel, IonChip, IonTabs, IonTabBar, IonTabButton, IonBadge, IonRouterOutlet, IonFab, IonFabButton, IonModal, IonFabList, IonAlert, IonCard, IonCardContent } from '@ionic/react';
import React, { useState } from 'react';
import firebaseApp from '../services/firebase'
import { map, person, heart, close, list } from 'ionicons/icons';
const auth = firebaseApp.auth()
const Home: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false)
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonFab vertical="bottom" horizontal="end" >
          <IonFabButton color="orange">
            <IonIcon icon={list} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton><IonIcon color="primary" icon={person} /></IonFabButton>
            <IonFabButton><IonIcon color="secondary" icon={map} /></IonFabButton>
            <IonFabButton><IonIcon color="danger" icon={heart} /></IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton onClick={() => { setShowAlert(true) }}><IonIcon icon={close} /></IonFabButton>
          </IonFabList>
        </IonFab>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          subHeader={'¿Tan rápido te vas?'}
          message={'¿Estás seguro de que deseas cerrar la sesión?'}
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                return false;
              }
            },
            {
              text: 'Si',
              handler: () => {
                firebaseApp.auth().signOut();
              }
            }
          ]}
        />
        <IonCard>
          <IonCardContent>
            <h3>En toda esta pantalla va el mapa.</h3>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
