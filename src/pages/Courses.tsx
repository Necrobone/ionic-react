import React, { Fragment } from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Courses: React.FC = () => {
  return (
    <Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This Works - Courses Page!</h2>
      </IonContent>
    </Fragment>
  );
};

export default Courses;
