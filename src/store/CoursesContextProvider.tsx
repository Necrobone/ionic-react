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
      included: true,
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

  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );

      const updatedCourseGoals = updatedCourses[
        updatedCourseIndex
      ].goals.filter((goal) => goal.id !== goalId);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  const updateGoal = (courseId: string, goalId: string, text: string) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );

      const updatedCourseGoals =
        updatedCourses[updatedCourseIndex].goals.slice();
      const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
        (goal) => goal.id === goalId
      );
      updatedCourseGoals[updatedCourseGoalIndex] = {
        ...updatedCourseGoals[updatedCourseGoalIndex],
        text,
      };
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  const changeCourseFilter = (courseId: string, included: boolean) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );

      updatedCourses[updatedCourseIndex] = {
        ...updatedCourses[updatedCourseIndex],
        included,
      };
      return updatedCourses;
    });
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        addGoal,
        addCourse,
        deleteGoal,
        updateGoal,
        changeCourseFilter,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
