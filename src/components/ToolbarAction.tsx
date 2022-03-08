import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import React from "react";

interface ToolbarActionProps {
  icon: string;
  link: string;
}

const ToolbarAction: React.FC<ToolbarActionProps> = (props) => {
  return (
    <IonButtons slot="end">
      <IonButton routerLink={props.link}>
        <IonIcon slot="icon-only" icon={props.icon} />
      </IonButton>
    </IonButtons>
  );
};

export default ToolbarAction;
