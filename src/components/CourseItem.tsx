import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface Course {
  id: string;
  title: string;
  enrolled: Date;
}

interface CourseItemProps {
  course: Course;
}

const CourseItem: React.FC<CourseItemProps> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          <h2>{props.course.title}</h2>
        </IonCardTitle>
        <IonCardSubtitle>
          <h3>
            Enrolled on{" "}
            {props.course.enrolled.toLocaleDateString("es-ES", {
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
            routerLink={`/courses/${props.course.id}`}
          >
            View Course Goals
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default CourseItem;
