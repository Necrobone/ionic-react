import React, { useState } from "react";
import CoursesContext, { Course } from "./CoursesContext";

const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: new Date().toString(),
      title,
      enrolled: date,
      goals: [],
    };

    setCourses((courses) => {
      return courses.concat(newCourse);
    });
  };
  const addGoal = () => {};
  const deleteGoal = () => {};
  const updateGoal = () => {};

  return (
    <CoursesContext.Provider
      value={{ courses, addGoal, addCourse, deleteGoal, updateGoal }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
