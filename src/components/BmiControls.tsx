import React from "react";
import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

interface BmiControlsProps {
  onCalculate: () => void;
  onReset: () => void;
}

const BmiControls: React.FC<BmiControlsProps> = (props) => {
  return (
    <IonRow className="ion-margin-top">
      <IonCol size="12" size-md="6" className="ion-text-center">
        <IonButton
          size="large"
          expand="block"
          color="secondary"
          onClick={props.onCalculate}
        >
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol size="12" size-md="6" className="ion-text-center">
        <IonButton color="medium" onClick={props.onReset} fill="clear">
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
