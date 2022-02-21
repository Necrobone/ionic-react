import React, { Fragment, useContext, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { add, addOutline } from "ionicons/icons";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";
import CoursesContext from "../store/CoursesContext";

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
  const context = useContext(CoursesContext);

  const [editing, setEditing] = useState(false);

  const cancelEditItemHandler = () => {
    setEditing(false);
  };

  const addItemHandler = () => {
    setEditing(true);
  };

  const addCourseHandler = (title: string, date: Date) => {
    context.addCourse(title, date);
    setEditing(false);
  };

  return (
    <Fragment>
      <AddCourseModal
        open={editing}
        onCancel={cancelEditItemHandler}
        onSave={addCourseHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={addItemHandler}>
                  <IonIcon slot="icon-only" icon={add} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {context.courses.map((course) => (
              <IonRow key={course.id}>
                <IonCol size-md="4" offset-md="4">
                  <CourseItem course={course} />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={addItemHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </Fragment>
  );
};

export default Courses;
