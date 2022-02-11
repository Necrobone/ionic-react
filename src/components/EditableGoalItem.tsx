import React from "react";
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from "@ionic/react";
import { create, trash } from "ionicons/icons";

interface EditableGoalItemProps {
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onDelete: () => void;
  onEdit: (event: React.MouseEvent) => void;
  text: string;
}

const EditableGoalItem: React.FC<EditableGoalItemProps> = (props) => {
  return (
    <IonItemSliding ref={props.slidingRef}>
      <IonItemOptions side="start">
        <IonItemOption onClick={props.onDelete} color="danger">
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>
      <IonItem>
        <IonLabel>{props.text}</IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={props.onEdit}>
          <IonIcon slot="icon-only" icon={create} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default EditableGoalItem;
