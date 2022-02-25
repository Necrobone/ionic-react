import React from "react";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";

import "./MemoryItem.css";

interface MemoryItemProps {
  image: string;
  title: string;
}

const MemoryItem: React.FC<MemoryItemProps> = (props) => {
  return (
    <IonCard>
      <img src={props.image} alt={props.title} />
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default MemoryItem;
