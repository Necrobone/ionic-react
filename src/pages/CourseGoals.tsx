import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import { COURSE_DATA } from "./Courses";
import { create, trash } from "ionicons/icons";

interface CourseGoalsParams {
  courseId: string;
}

const CourseGoals: React.FC = () => {
  const courseId = useParams<CourseGoalsParams>().courseId;

  const course = COURSE_DATA.find((c) => c.id === courseId);

  const deleteItemHandler = () => {};

  const editItemHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{course ? course?.title : "No course found!"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {course && (
          <IonList>
            {course.goals.map((goal) => (
              <IonItemSliding key={goal.id}>
                <IonItemOptions side="start">
                  <IonItemOption onClick={deleteItemHandler} color="danger">
                    <IonIcon slot="icon-only" icon={trash} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem>
                  <IonLabel>{goal.text}</IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={editItemHandler}>
                    <IonIcon slot="icon-only" icon={create} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
