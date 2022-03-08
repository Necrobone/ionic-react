import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Capacitor } from "@capacitor/core";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { camera } from "ionicons/icons";
import React, { Fragment, useRef, useState } from "react";

import "./ImagePicker.css";

interface ImagePickerProps {
  onImagePick: (photo: Photo) => void;
}

export interface Photo {
  path: string | undefined;
  previewUrl: string;
}

const ImagePicker: React.FC<ImagePickerProps> = (props) => {
  const [takenPhoto, setTakenPhoto] = useState<Photo>();

  const filePickerRef = useRef<HTMLInputElement>(null);

  const openFilePicker = () => {
    filePickerRef.current!.click();
  };

  const pickFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target!.files![0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const photo: Photo = {
        path: undefined,
        previewUrl: fileReader.result!.toString(),
      };
      setTakenPhoto(photo);
      props.onImagePick(photo);
    };

    fileReader.readAsDataURL(file);
  };

  const takePhotoHandler = async () => {
    if (!Capacitor.isPluginAvailable("Camera")) {
      openFilePicker();
      return;
    }

    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 80,
        width: 500,
      });

      if (!photo || !photo.webPath) {
        return;
      }

      const pickedPhoto: Photo = {
        path: photo.path,
        previewUrl: photo.webPath,
      };
      setTakenPhoto(pickedPhoto);
      props.onImagePick(pickedPhoto);
    } catch (error) {
      openFilePicker();
    }
  };

  return (
    <Fragment>
      <div className="image-preview">
        {!takenPhoto && <h3>No photo chosen.</h3>}
        {takenPhoto && <img src={takenPhoto.previewUrl} alt="Preview" />}
      </div>
      <IonButton fill="clear" onClick={takePhotoHandler}>
        <IonIcon icon={camera} slot="start" />
        <IonLabel>Take Photo</IonLabel>
      </IonButton>
      <input
        type="file"
        hidden
        ref={filePickerRef}
        onChange={pickFileHandler}
      />
    </Fragment>
  );
};

export default ImagePicker;
