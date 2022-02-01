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
            <h2>Your Body Mass Index</h2>
            <h3 className="ion-text-center">{props.bmi.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
