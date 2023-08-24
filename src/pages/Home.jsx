import React from 'react'
import { turquesa } from '../navfotos'

const Home = () => {
    return (
        <div>
            <h3 className='bg-orange-500'>el Home</h3>
            <img src={turquesa} alt="user" className='w-[70%] h-[100%] align-middle'/>
        </div>
    )
}

export default Home