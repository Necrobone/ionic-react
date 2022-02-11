import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPopover,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { calendar } from "ionicons/icons";

interface EditCourseModalProps {
  open: boolean;
  onCancel: () => void;
}

const AddCourseModal: React.FC<EditCourseModalProps> = (props) => {
  const [selectedDate, setSelectedDate] = useState("Enrolment Date");

  return (
    <IonModal isOpen={props.open}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Course Title</IonLabel>
                <IonInput type="text" />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput id="date-input-2" value={selectedDate} />
                <IonButton fill="clear" id="open-date-input-2">
                  <IonIcon icon={calendar} />
                </IonButton>
                <IonPopover trigger="open-date-input-2" showBackdrop={false}>
                  <IonDatetime
                    presentation="date"
                    locale="es-ES"
                    showClearButton={true}
                    onIonChange={(ev) =>
                      setSelectedDate(
                        new Date(ev.detail.value!).toLocaleDateString()
                      )
                    }
                  />
                </IonPopover>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton color="dark" fill="clear" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block">
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddCourseModal;
