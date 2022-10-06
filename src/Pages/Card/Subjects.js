import React, { useEffect, useState } from 'react';
import Subject from './Subject';

const Subjects = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, [subjects]);
    return (
        <div className='bg-info'>

            <div className='m-20'>
                <br />
                <h1 className='font-bold text-2xl'>এই কোর্সের বিশেষত্ব কি?</h1>
                <p>এই কোর্স কিভাবে চলবে?</p>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 '>
                    {
                        subjects.map(subject => <Subject subject={subject}></Subject>)
                    }
                </div>
            </div>
            <br />
        </div>
    );
};

export default Subjects;