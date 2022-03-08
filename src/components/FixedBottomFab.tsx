import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import React from "react";

interface FixedBottomFabProps {
  icon: string;
  link: string;
}

const FixedBottomFab: React.FC<FixedBottomFabProps> = (props) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton routerLink={props.link}>
        <IonIcon icon={props.icon} />
      </IonFabButton>
    </IonFab>
  );
};

export default FixedBottomFab;
