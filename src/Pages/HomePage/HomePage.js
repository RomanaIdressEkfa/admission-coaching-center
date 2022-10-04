import React from 'react';
import CourseView from './CourseView';
import Home from './Home';
import LearnCourse from './LearnCourse';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <CourseView></CourseView>
            <LearnCourse></LearnCourse>
        </div>
    );
};

export default HomePage;