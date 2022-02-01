import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";
import React from "react";

interface BmiResultProps {
  bmi: number;
}

const BmiResult: React.FC<BmiResultProps> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <h2>{props.bmi}</h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
