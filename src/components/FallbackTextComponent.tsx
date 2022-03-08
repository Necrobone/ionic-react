import { IonCol, IonRow } from "@ionic/react";
import React from "react";

interface FallbackTextComponentProps {
  text: string;
}

const fallbackTextComponent: React.FC<FallbackTextComponentProps> = (props) => {
  return (
    <IonRow>
      <IonCol className="ion-text-center">
        <h2>{props.text}</h2>
      </IonCol>
    </IonRow>
  );
};

export default fallbackTextComponent;
