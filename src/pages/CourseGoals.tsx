import React, { Fragment, useContext, useRef, useState } from "react";
import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { useParams } from "react-router";
import { add, addOutline } from "ionicons/icons";
import EditModal from "../components/EditModal";
import EditableGoalItem from "../components/EditableGoalItem";
import CoursesContext from "../store/CoursesContext";

interface CourseGoalsParams {
  courseId: string;
}

interface Goal {
  id: string;
  text: string;
}

const CourseGoals: React.FC = () => {
  const context = useContext(CoursesContext);

  const [deleting, setDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [editing, setEditing] = useState(false);
  const [goal, setGoal] = useState<Goal | null>(null);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const selectedGoalIdRef = useRef<string | null>(null);

  const courseId = useParams<CourseGoalsParams>().courseId;
  const course = context.courses.find((c) => c.id === courseId);

  const deleteItemHandler = (goalId: string) => {
    setDeleting(true);
    selectedGoalIdRef.current = goalId;
  };

  const deleteGoalHandler = () => {
    setDeleting(false);
    context.deleteGoal(courseId, selectedGoalIdRef.current!);
    setToastMessage("Deleted Goal!");
  };

  const editItemHandler = (goalId: string) => {
    const goal = course?.goals.find((g) => g.id === goalId);
    slidingOptionsRef.current?.closeOpened();
    if (!goal) {
      return;
    }

    setEditing(true);
    setGoal(goal);
  };

  const cancelEditItemHandler = () => {
    setEditing(false);
    setGoal(null);
  };

  const saveGoalHandler = (text: string) => {
    if (goal) {
      context.updateGoal(courseId, goal.id, text);
    } else {
      context.addGoal(courseId, text);
    }
    setEditing(false);
  };

  const addItemHandler = () => {
    setEditing(true);
    setGoal(null);
  };

  return (
    <Fragment>
      <EditModal
        open={editing}
        onCancel={cancelEditItemHandler}
        onSave={saveGoalHandler}
        editedGoal={goal}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        onDidDismiss={() => {
          setToastMessage("");
        }}
      />
      <IonAlert
        isOpen={deleting}
        header="Are you sure?"
        message="Do you want to delete the goal? This cannot be undone."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setDeleting(false);
            },
          },
          {
            text: "Yes",
            handler: deleteGoalHandler,
          },
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/courses/list" />
            </IonButtons>
            <IonTitle>{course ? course?.title : "No course found!"}</IonTitle>
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
          {course && (
            <IonList>
              {course.goals.map((goal) => (
                <EditableGoalItem
                  key={goal.id}
                  slidingRef={slidingOptionsRef}
                  onDelete={deleteItemHandler.bind(null, goal.id)}
                  onEdit={editItemHandler.bind(null, goal.id)}
                  text={goal.text}
                />
              ))}
            </IonList>
          )}
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

export default CourseGoals;
