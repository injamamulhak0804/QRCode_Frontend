import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-16'>
        <div>
            <Link to="/">
            <img className='w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBIPrdWchK19o5nOJFZRZivjeAv1pdKP_OQ&s" alt="" />
            </Link>
        </div>
        <div>
            <ul className='flex gap-5 font-monsterrat'> 
                <Link to="/"><li className='cursor-pointer text-md'>Home</li></Link>
                <li className='cursor-pointer text-md'>Creative & Design</li>
                <Link to="/create"><li className='cursor-pointer text-md'>Create</li></Link>
                <li className='cursor-pointer text-md'>Edit</li>
            </ul>
        </div>
    </div>
  )
}

export default Header