import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className='flex mt-6 items-center justify-center'>
        <div className='w-[40%]'>
            <h1 className='font-monsterrat font-extrabold text-6xl'>Free QR code generator.</h1>
            <p className='font-monsterrat text-sm pt-5'>Engage the audience with scannable QR codes! Generate with Adobe Express, your all-in-one AI content creation app.</p>
            <Link to="/create"><button className='px-6 font-monsterrat text-sm py-2 bg-blue-600 text-white font-bold rounded-full   mt-5'>Create Now</button></Link>
            <button className='px-6 font-monsterrat text-sm py-2 bg-slate-200 font-medium rounded-full mx-2 mt-5'>Free to use</button>
        </div> 
        <div className='w-[40%]'>
            <img className='' src="https://www.adobe.com/in/express/feature/image/media_156ecf431df2a1bbfd95ce7e37bb6aa1eb19a2090.png?width=2000&format=webply&optimize=medium" alt="" />
        </div>
    </div>
  )
}

export default Hero