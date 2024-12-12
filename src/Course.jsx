import React from 'react'
import Nav from './Componets/Nav'
import { useLocation, Link } from 'react-router-dom'
import { courses } from './data'

export default function Course() {
    let location = useLocation();
    let currentId = parseInt(location.pathname.split('/')[2]); // Convert string to number
    let currentData = courses.filter((v) => v.id === currentId)[0]; // Find the course with matching id

    if (!currentData) {
        return <p>Course not found</p>; // In case the course doesn't exist
    }

    return (
        <>
            <Nav />
            <div className="flex items-center justify-center flex-col" >
                <div className="w-[80%] mt-5 rounded overflow-hidden ">
                    <div className="course-img w-full h-[250px] rounded-md">
                        <img className="w-full h-full object-cover" src={currentData.image} alt={currentData.name} />
                    </div>
                    <div className="course-info p-4">
                        <h1 className="text-lg font-bold text-gray-900">{currentData.name}</h1>
                        <h2 className="text-xl font-bold text-gray-900">{currentData.category}</h2>
                        <p>{currentData.level}</p>
                        <p className="text-gray-600">{currentData.description}</p>
                        <div className="flex justify-between items-center mt-4">
                            <p>EnrollStudents : {currentData.enrolledStudents}</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Enroll Now
                            </button>
                            <p>course duraction :- {currentData.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-reviews mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Reviews:</h3>
                <div className="list-disc list-inside shadow-lg rounded-md mt-5 flex items-center justify-center flex-wrap gap-5">
                    {currentData.reviews.map((review, index) => (

                        <div key={index} className='mt-5 border-2  shadow-lg bg-white border border-gray-200 p-6'>
                            <p className="text-gray-700">
                                <strong>{review.username}:</strong>
                            </p>
                            <p>{review.comment}</p>
                            <p> (Rating: {review.rating}/5)</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-4xl capitalize mt-5'>how to learn in this course</h1>
            </div>

        </>
    );
}
