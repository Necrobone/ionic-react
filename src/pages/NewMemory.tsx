import React, { useContext, useRef, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { camera } from "ionicons/icons";

import "./NewMemory.css";
import { base64FromPath } from "@capacitor-community/filesystem-react";
import MemoriesContext from "../data/MemoriesContext";
import { useHistory } from "react-router";

interface Photo {
  path: string | undefined;
  previewUrl: string;
}

const NewMemory: React.FC = () => {
  const context = useContext(MemoriesContext);

  const [takenPhoto, setTakenPhoto] = useState<Photo>();
  const [chosenMemoryType, setChosenMemoryType] = useState<"good" | "bad">(
    "good"
  );

  const titleRef = useRef<HTMLIonInputElement>(null);

  const history = useHistory();

  const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChosenMemoryType(selectedMemoryType);
  };

  const takePhotoHandler = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 80,
      width: 500,
    });

    if (!photo || !photo.webPath) {
      return;
    }

    setTakenPhoto({
      path: photo.path,
      previewUrl: photo.webPath,
    });
  };

  const addMemoryHandler = async () => {
    const enteredTitle = titleRef.current?.value;

    if (
      !enteredTitle ||
      enteredTitle.toString().trim().length === 0 ||
      !takenPhoto ||
      !chosenMemoryType
    ) {
      return;
    }

    const fileName = new Date().getTime() + ".jpeg";
    const base64 = await base64FromPath(takenPhoto!.previewUrl);

    await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Data,
    });

    context.addMemory(
      fileName,
      base64,
      enteredTitle.toString(),
      chosenMemoryType
    );
    history.length > 0 ? history.goBack() : history.replace("/good-memories");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Memory</IonTitle>
          <IonButtons slot="end">
            <IonBackButton defaultHref="/good-memories" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Memory Title</IonLabel>
                <IonInput type="text" ref={titleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Memory Title</IonLabel>
                <IonSelect
                  onIonChange={selectMemoryTypeHandler}
                  value={chosenMemoryType}
                >
                  <IonSelectOption value="good">Good Memory</IonSelectOption>
                  <IonSelectOption value="bad">Bad Memory</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <div className="image-preview">
                {!takenPhoto && <h3>No photo chosen.</h3>}
                {takenPhoto && (
                  <img src={takenPhoto.previewUrl} alt="Preview" />
                )}
              </div>
              <IonButton fill="clear" onClick={takePhotoHandler}>
                <IonIcon icon={camera} slot="start" />
                <IonLabel>Take Photo</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol className="ion-text-center">
              <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
