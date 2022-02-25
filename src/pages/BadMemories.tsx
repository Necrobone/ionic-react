import React, { useContext } from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { add } from "ionicons/icons";
import MemoriesContext from "../data/MemoriesContext";
import MemoriesList from "../components/MemoriesList";

const BadMemories: React.FC = () => {
  const context = useContext(MemoriesContext);

  const badMemories = context.memories.filter(
    (memory) => memory.type === "bad"
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bad Memories</IonTitle>
          {isPlatform("ios") && (
            <IonButtons slot="end">
              <IonButton routerLink="/new-memory">
                <IonIcon slot="icon-only" icon={add} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {badMemories.length === 0 && (
            <IonRow>
              <IonCol className="ion-text-center">
                <h2>No Bad Memories Found</h2>
              </IonCol>
            </IonRow>
          )}
          <MemoriesList items={badMemories} />
        </IonGrid>
        {!isPlatform("ios") && (
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton routerLink="/new-memory">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default BadMemories;
