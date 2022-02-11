import React, { Fragment, useRef, useState } from "react";
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
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { useParams } from "react-router";
import { COURSE_DATA } from "./Courses";
import { add, addOutline, create, trash } from "ionicons/icons";
import EditModal from "../components/EditModal";

interface CourseGoalsParams {
  courseId: string;
}

interface Goal {
  id: string;
  text: string;
}

const CourseGoals: React.FC = () => {
  const [deleting, setDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [editing, setEditing] = useState(false);
  const [goal, setGoal] = useState<Goal | null>(null);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const courseId = useParams<CourseGoalsParams>().courseId;
  const course = COURSE_DATA.find((c) => c.id === courseId);

  const deleteItemHandler = () => {
    setDeleting(true);
  };

  const deleteGoalHandler = () => {
    setDeleting(false);
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

  const addItemHandler = () => {
    setEditing(true);
    setGoal(null);
  };

  return (
    <Fragment>
      <EditModal
        open={editing}
        onCancel={cancelEditItemHandler}
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
                <IonItemSliding key={goal.id} ref={slidingOptionsRef}>
                  <IonItemOptions side="start">
                    <IonItemOption onClick={deleteItemHandler} color="danger">
                      <IonIcon slot="icon-only" icon={trash} />
                    </IonItemOption>
                  </IonItemOptions>
                  <IonItem>
                    <IonLabel>{goal.text}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={editItemHandler.bind(null, goal.id)}
                    >
                      <IonIcon slot="icon-only" icon={create} />
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
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
