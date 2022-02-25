import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const NewMemory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Memory</IonTitle>
          <IonButtons slot="end">
            <IonBackButton defaultHref="/good-memories" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>New Memory Page</h2>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
