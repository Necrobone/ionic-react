import React from "react";
import Courses from "./pages/Courses";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";

import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";

import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";
import CourseGoals from "./pages/CourseGoals";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact>
          <Courses />
        </Route>
        <Route path="/course-goals">
          <CourseGoals />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    <h2>This Works!</h2>
  </IonApp>
);

export default App;
