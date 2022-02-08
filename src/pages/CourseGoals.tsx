import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import { COURSE_DATA } from "./Courses";

interface CourseGoalsParams {
  courseId: string;
}

const CourseGoals: React.FC = () => {
  const courseId = useParams<CourseGoalsParams>().courseId;

  const course = COURSE_DATA.find((c) => c.id === courseId);

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
        <h2>This Works - Courses Goals Page!</h2>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
