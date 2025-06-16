import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "motion/react"
const Speech = () => {
  return (
    <motion.div animate={{opacity:[0,1]}}
    transition={{duration:1}} className='bubbleContainer'>
    <div className='bubble'>
        <TypeAnimation
      sequence={[
        'I am a MERN Stack Developer with specialization in web dev.',
        1000, 
        'My expertise spans across frontend and backend development.',
        1000,
        
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />
    </div>
    <img src='/images/man.png'/>
      
    </motion.div>
  )
}

export default Speech
