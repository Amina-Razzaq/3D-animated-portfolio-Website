import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import "./hero.css"
import Speech from './Speech'
import {motion} from "motion/react"
import Shape from './Shape'
const awardVariants ={
  initial:{
        x:-100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
         duration:1,
         staggerChildren :0.2,
        }
    }
}
const followVariants ={
  initial:{
        y:-100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
         duration:1,
         staggerChildren :0.2,
        }
    }
}
const Hero = () => {
  return (
    <div className='hero'>
     <div className='hSection left'>
    {/* Title */}
     <motion.h1  initial={{y:-100, opacity:0}}
     animate={{y:0, opacity:1}}
     transition={{duration:2, }} className='hTitle'>
      Hey There,<br/><span>I'm Amina!</span>
     </motion.h1>
     {/* Awards */}
     <motion.div variants={awardVariants} initial="initial" 
     animate="animate"
     className='awards'>
      <motion.h2 variants={awardVariants} initial="initial" 
     animate="animate">Top Rated Developer</motion.h2>
      <motion.p variants={awardVariants} initial="initial" 
     animate="animate">lorem ipsum dolor amet, constetuar</motion.p>
      <motion.div variants={awardVariants} initial="initial" 
     animate="animate"className='awardList'>
        <motion.img variants={awardVariants} initial="initial" 
     animate="animate" src='/images/award1.png'/>
        <motion.img variants={awardVariants} initial="initial" 
     animate="animate" src='/images/award2.png'/>
        <motion.img variants={awardVariants} initial="initial" 
     animate="animate" src='/images/award3.png'/>
        </motion.div>
        {/* scroll svg */}
        
          <motion.a
          animate={{y:[0,5],opacity:[0,1,0]}}
          transition={{
            repeat:Infinity,
            duration:4,
            ease:"easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
            animate={{y:[0,5]}}
             transition={{
            repeat:Infinity,
            duration:4,
            ease:"easeInOut",
          }}
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
      </motion.a>
        
     </motion.div>

     </div> 
     <div className='hSection right'>
     {/* follow */}
     <motion.div 
     variants={followVariants} initial="initial" 
     animate="animate"
     className='follow'>
     <motion.a  variants={followVariants}  href=''><img src='/images/instagram.png'/></motion.a>
     <motion.a  variants={followVariants}  href='/'><img src='/images/github.png' /></motion.a>
     <motion.a  variants={followVariants}  href='/'><img src='/images/youtube.png'/></motion.a>
     <motion.div  variants={followVariants} className='followTextContainer'>
      <div className='followText'>FIND ME </div>
     </motion.div>
     </motion.div>
     
     {/* bubble */}
     <Speech/>
     {/* cerrtiicates */}
     <motion.div animate={{opacity:[0,1]}}
    transition={{duration:1}} className='certificate'><img src='/images/certificate.png'/>
     MERN STACK DEVELOPER
     <br/>
     PROFESSIONAL CODER
     <br/>
     FUTURE AI DEVELOPER
     </motion.div>
     {/* contact button  */}
     <motion.a animate={{x:[200,0],opacity:[0,1],}}
     transition={{duration:2,}} href='/#contact' className='contactLink'>
      <motion.div animate={{rotate:[0,360]}}
      transition={{duration:10,
      repeat:Infinity,
      ease:"linear",}} className='contactButton'>
        <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
             <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
      </motion.div>
     </motion.a>
     </div>
     <div className='bg'>
      {/* 3d */}
      <Canvas>
      <Suspense fallback="loading...">
        <Shape />
        </Suspense>
      </Canvas>
      <div className='hImg'>
        <img src='/images/hero.png'/>
      </div>
     </div> 
    </div>
  )
}

export default Hero
