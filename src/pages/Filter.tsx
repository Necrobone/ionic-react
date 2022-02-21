import React, { useContext } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import CoursesContext from "../store/CoursesContext";

const Filter: React.FC = () => {
  const context = useContext(CoursesContext);

  const courseFilterChangeHandler = (event: CustomEvent) => {
    context.changeCourseFilter(event.detail.value, event.detail.checked);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {context.courses.map((course) => (
            <IonItem>
              <IonLabel>{course.title}</IonLabel>
              <IonToggle
                checked={course.included}
                value={course.id}
                onIonChange={courseFilterChangeHandler}
              />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Filter;
