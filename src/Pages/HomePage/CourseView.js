import React from 'react';

const CourseView = () => {
    return (
        <div className='shadow-lg w-5/6 rounded-2xl mt-[-150px] bg-neutral relative z-20  p-10 mx-auto' data-aos="zoom-in" data-aos-delay="800"
            data-aos-duration="1000" >
            <h1 className='text-center font-bold text-2xl mb-3 text-primary'>পরবর্তী ব্যাচের সময় সূচি</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4  text-primary'>
                <p>এনরোলমেন্ট শুরু: ডিসেম্বর ১০, ২০২২ (শনিবার)</p>
                <p>এনরোলমেন্ট শুরু: ডিসেম্বর ১০, ২০২২ (শনিবার)</p>
                <p>এনরোলমেন্ট শুরু: ডিসেম্বর ১০, ২০২২ (শনিবার)</p>
                <p>এনরোলমেন্ট শুরু: ডিসেম্বর ১০, ২০২২ (শনিবার)</p>

            </div>
            <div className='flex items-center justify-center mt-6 md:w-auto'>
                <h1 className='bg-primary border text-white font-bold p-4 rounded'>তুমি ৭ম ব্যাচে এনরোল করতে আগ্রহি হলে,ওয়েবসাইটে রেজিস্ট্রেশন করে রাখো

                </h1>
            </div>
        </div >
    );
};

export default CourseView;