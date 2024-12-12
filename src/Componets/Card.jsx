import React from 'react'
import { courses } from '../data'
import { Link } from 'react-router-dom'
export default function Card() {
    return (
        <>
            <div className="flex items-center justify-center  flex-wrap gap-3">
                {courses.map((course, index) => {
                    return (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-6">
                            <div className="course-img w-80 h-[250px]  rounded-md">
                                <img className='w-full h-full object-cover' src={course.image} alt="" />
                            </div>
                            {/* Course Name */}
                            <h2 className="font-bold text-xl mb-2 text-gray-900 mt-5">{course.name}</h2>

                            {/* Price */}
                            <p className="text-gray-700 text-base mb-4">
                                <span className="font-semibold">Price:</span> ${course.price}
                            </p>

                            {/* Review */}
                            <div className="mb-4">
                                <span className="font-semibold">Review:</span>
                                <p className="text-yellow-500">"Great course for beginners!"</p>
                            </div>

                            {/* Enroll Button */}
                            <Link to={`/serives/${course.id}`}>    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Enroll Now
                            </button></Link>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
