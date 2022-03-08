import {
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { Memory } from "../data/MemoriesContext";
import FallbackTextComponent from "./FallbackTextComponent";
import FixedBottomFab from "./FixedBottomFab";
import MemoriesList from "./MemoriesList";
import ToolbarAction from "./ToolbarAction";

interface MemoriesContentProps {
  title: string;
  fallbackText: string;
  memories: Memory[];
}

const MemoriesContent: React.FC<MemoriesContentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
          {isPlatform("ios") && <ToolbarAction icon={add} link="/new-memory" />}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {props.memories.length === 0 && (
            <FallbackTextComponent text={props.fallbackText} />
          )}
          <MemoriesList items={props.memories} />
        </IonGrid>
        {!isPlatform("ios") && <FixedBottomFab icon={add} link="/new-memory" />}
      </IonContent>
    </IonPage>
  );
};

export default MemoriesContent;
