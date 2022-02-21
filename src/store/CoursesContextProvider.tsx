import React, { useState } from "react";
import CoursesContext, { Course, Goal } from "./CoursesContext";

const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title,
      enrolled: date,
      goals: [],
    };

    setCourses((courses) => {
      return courses.concat(newCourse);
    });
  };
  const addGoal = (courseId: string, text: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text,
    };

    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );

      const updatedCourseGoals =
        updatedCourses[updatedCourseIndex].goals.concat(newGoal);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };
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
