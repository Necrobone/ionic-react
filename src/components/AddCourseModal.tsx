import React, { useRef, useState } from "react";
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
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { calendar } from "ionicons/icons";

interface EditCourseModalProps {
  open: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}

const AddCourseModal: React.FC<EditCourseModalProps> = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState("");
  const titleRef = useRef<HTMLIonInputElement>(null);

  const saveHandler = () => {
    const enteredTitle = titleRef.current!.value;

    if (
      !enteredTitle ||
      !selectedDate ||
      enteredTitle.toString().trim().length === 0 ||
      selectedDate.trim().length === 0
    ) {
      setError("Please enter a valid title and select a valid date");
      return;
    }

    setError("");

    props.onSave(enteredTitle.toString(), new Date(selectedDate));
  };

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
                <IonInput type="text" ref={titleRef} />
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
          {error && (
            <IonRow className="ion-text-center">
              <IonCol>
                <IonText color="danger">{error}</IonText>
              </IonCol>
            </IonRow>
          )}
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton color="dark" fill="clear" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" onClick={saveHandler}>
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
