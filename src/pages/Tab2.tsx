import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import { useState } from 'react';

export default function Tab2(){

  const { photos, takePhoto } = usePhotoGallery()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {photos.map((photo, idx) => (
              <IonCol size="6" key={idx}>
                <IonImg src={photo.webviewPath}/>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical='bottom' horizontal='center' slot="fixed">
            <IonFabButton onClick={() => {takePhoto()}}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};