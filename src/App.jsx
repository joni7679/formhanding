
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Componets/Nav';
import Home from './Componets/Home';
import Card from './Componets/Card';

function App() {


  return (

    <>
      <Nav />
      <Home />

      <Card />
      {/* <div className='bg-white absolute top-[-100%] left-1/2 -translate-x-1/2 -translate-y-1/2  shadow-md p-4 rounded w-[400px] duration-150 delay-300'>
        <h1 className='text-4xl font-bold'>Login</h1>

        <form onSubmit={formSubmitHandler} className='flex flex-col gap-4 mt-4'>
          <span className='absolute right-[5%] top-4 cursor-pointer'>X</span>
          <input type="text" className='border border-gray-300 outline-none  rounded-md p-2' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
          <input type="email" className='border border-gray-300 outline-none rounded-md p-2' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
          <input type="password" className='border border-gray-300 outline-none rounded-md p-2' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
          <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
        </form>
      </div> */}
    </>
  )
}

export default App
