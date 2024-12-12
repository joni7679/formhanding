import React from 'react'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Home() {
    const [showlogin, setShowLogin] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("hello");
        setName('');
        setEmail('');
        setPassword('');
        console.log(name, email, password);
    }

    return (
        <>
            <div className={`bg-white absolute top-[-100%] left-1/2 -translate-x-1/2 -translate-y-1/2  shadow-md p-4 rounded w-[400px] duration-150 delay-300  ${showlogin ? "activeLogin" : ''}`}>
                <h1 className='text-4xl font-bold'>Login</h1>

                <form onSubmit={formSubmitHandler} className=''>
                    <span onClick={() => setShowLogin(!showlogin)} className='absolute right-[5%] top-4 cursor-pointer'>X</span>
                    <div className="flex flex-col gap-4 mt-4 items-center">
                        <div className='w-[80%]'>
                            <input type="text" className='border border-gray-300 outline-none  rounded-md p-2 w-full' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name ' />
                        </div>
                        <div className='w-[80%]'>
                            <input type="email" className='border border-gray-300 outline-none rounded-md p-2 w-full' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                        </div>

                        <div className='relative w-[80%]'>
                            <input type={showPass ? "text" : "password"} className='border border-gray-300 outline-none rounded-md p-2 w-full' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                            {
                                showPass ? (
                                    (
                                        <FaEye onClick={() => setShowPass(!showPass)} className='inline cursor-pointer absolute top-[25%] right-[5%]' />
                                    )
                                ) :
                                    (
                                        <FaEyeSlash onClick={() => setShowPass(!showPass)} className='inline cursor-pointer absolute top-[25%] right-[5%]' />
                                    )
                            }

                        </div>
                    </div>
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-md mt-5 w-[80%]'>Submit</button>
                </form>
            </div>
            <div className='banner-section py-5  px-10'>
                <div className='banner-content'>
                    <h1 className='text-2xl capitalize'>Welcome to our website</h1>
                    <p className='capitalize text-xl'>This is a sample website</p>
                    <button onClick={() => setShowLogin(!showlogin)} className='bg-blue-600 py-[10px] px-[25px] rounded-md mt-5 text-white'>Login</button>

                </div>

            </div>

        </>
    )
}
