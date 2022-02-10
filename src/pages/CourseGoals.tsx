import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import { COURSE_DATA } from "./Courses";
import { create } from "ionicons/icons";

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
              <IonItem key={goal.id} button onClick={deleteItemHandler}>
                <IonLabel>{goal.text}</IonLabel>
                <IonButton
                  fill="clear"
                  color="dark"
                  slot="end"
                  onClick={editItemHandler}
                >
                  <IonIcon slot="icon-only" icon={create} />
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
