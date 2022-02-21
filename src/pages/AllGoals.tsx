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
  IonToolbar,
} from "@ionic/react";
import CoursesContext from "../store/CoursesContext";

const AllGoals: React.FC = () => {
  const context = useContext(CoursesContext);

  const goals = context.courses
    .filter((course) => {
      return course.included;
    })
    .map((course) => {
      return course.goals.map((goal) => {
        return { ...goal, courseTitle: course.title };
      });
    })
    .reduce((previousGoalArray, currentGoalArray) => {
      let updatedGoalArray = previousGoalArray;
      for (const goal of currentGoalArray) {
        updatedGoalArray = updatedGoalArray.concat(goal);
      }

      return updatedGoalArray;
    }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {goals.map((goal) => (
            <IonItem key={goal.id}>
              <IonLabel>
                <h2>{goal.text}</h2>
                <p>{goal.courseTitle}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
