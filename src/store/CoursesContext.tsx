import React from "react";

export interface Goal {
  id: string;
  text: string;
}

export interface Course {
  id: string;
  title: string;
  enrolled: Date;
  goals: Goal[];
  included: boolean;
}

interface Context {
  courses: Course[];
  addCourse: (title: string, date: Date) => void;
  addGoal: (courseId: string, text: string) => void;
  deleteGoal: (courseId: string, goalId: string) => void;
  updateGoal: (courseId: string, goalId: string, text: string) => void;
  changeCourseFilter: (courseId: string, included: boolean) => void;
}

const CoursesContext = React.createContext<Context>({
  courses: [],
  addCourse: () => {},
  addGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
  changeCourseFilter: () => {},
});

export default CoursesContext;
