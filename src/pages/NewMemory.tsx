import React from "react";
import {
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
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>New Memory Page</h2>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
