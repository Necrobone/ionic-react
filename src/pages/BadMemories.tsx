import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const BadMemories: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bad Memories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Bad Memories Page</h2>
      </IonContent>
    </IonPage>
  );
};

export default BadMemories;
