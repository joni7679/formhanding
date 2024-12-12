import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <nav className='w-full z-10  shadow-lg  bg-white flex items-center justify-between'>
                <div className="logo">
                    <Link to={'/'}>  <h1>logo</h1></Link>
                </div>
                <div className="nav-part ">
                    <Link to={'/'} className=' capitalize text-black mr-5' href=''>Home</Link>
                    <Link to={'/about'} className=' capitalize text-black mr-5' href=''>About us</Link>
                    <Link to={'/serives'} className=' capitalize text-black mr-5' href=''>Serives</Link>
                    <Link to={'/'} className=' capitalize text-black mr-5' href=''>Login</Link>
                </div>
            </nav>
        </>
    )
}
