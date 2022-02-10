import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Courses from "./Courses";
import AllGoals from "./AllGoals";
import CourseGoals from "./CourseGoals";
import { list, trophyOutline } from "ionicons/icons";

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="main">
        <Redirect path="/courses" to="/courses/list" exact />
        <Switch>
          <Route path="/courses/list" exact>
            <Courses />
          </Route>
          <Route path="/courses/all-goals" exact>
            <AllGoals />
          </Route>
          <Route path="/courses/:courseId">
            <CourseGoals />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="all-goals" href="/courses/all-goals">
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="courses" href="/courses/list">
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
