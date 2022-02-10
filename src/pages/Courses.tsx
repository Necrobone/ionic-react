import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + React - The Practical Guide",
    enrolled: new Date("2019-03-22"),
    goals: [
      {
        id: "c1g1",
        text: "Finish the course!",
      },
      {
        id: "c1g2",
        text: "Learn a lot!",
      },
    ],
  },
  {
    id: "c2",
    title: "React.js - The Complete Guide",
    enrolled: new Date("2018-05-15"),
    goals: [
      {
        id: "c2g1",
        text: "Finish the course!",
      },
      {
        id: "c2g2",
        text: "Learn a lot!",
      },
    ],
  },
  {
    id: "c3",
    title: "Javascript - The Complete Guide",
    enrolled: new Date("2020-01-22"),
    goals: [
      {
        id: "c3g1",
        text: "Finish the course!",
      },
      {
        id: "c3g2",
        text: "Learn a lot!",
      },
    ],
  },
];

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>
                      <h2>{course.title}</h2>
                    </IonCardTitle>
                    <IonCardSubtitle>
                      <h3>
                        Enrolled on{" "}
                        {course.enrolled.toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </h3>
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="ion-text-right">
                      <IonButton
                        fill="clear"
                        color="secondary"
                        routerLink={`/courses/${course.id}`}
                      >
                        View Course Goals
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
