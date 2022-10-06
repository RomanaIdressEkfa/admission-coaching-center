import React from 'react';
import CourseView from './CourseView';
import Home from './Home';
import LearnCourse from '../Card/LearnCourse';
import Subject from '../Card/Subjects';
import Course from './Course';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <CourseView></CourseView>
            <LearnCourse></LearnCourse>
            <Subject></Subject>
            <Course></Course>
        </div>
    );
};

export default HomePage;