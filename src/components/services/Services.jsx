import React, { useRef, useState } from 'react';
import "./services.css";
import ComputerModalContainer from './computer/ComputerModalContainer';
import MugModelContainer from './mug/MugModelContainer';
import ConsoleModelContainer from './console/ConsoleModelContainer';
import Counter from './Counter';
import{  motion, useInView}  from "motion/react"
const textVariants={
  initial:{
    x:-100,
    y:-100,
    opacity:0,
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1
    }
  },
}
const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};


const services = [
  {
    id: 1,
    img: "/images/service1.png",
    title: "Web Development",
    counter: 5,
  },
  {
    id: 2,
    img: "/images/service2.png",
    title: "UX/UI Design",
    counter: 8,
  },
  {
    id: 3,
    img: "/images/service3.png",
    title: "App Developement",
    counter: 2,
  },
];

const Services = () => {
  const[currentServiceId,setCurrentServiceId]=useState(1)
const ref=useRef();
const isInView = useInView(ref,{margin:"-200px"});
  return (
    <div className='services' ref={ref}>
      <div className='sSection left'>
        <motion.h1 variants={textVariants}  animate={isInView ? "animate" : "initial"} className='sTitle'>Which  I do?</motion.h1>
        <motion.div variants={listVariants}  animate={isInView ? "animate" : "initial"}  className='serviceList'>
          {services.map((service) => (
            <motion.div variants={listVariants}  animate={isInView ? "animate" : "initial"}  className='service' key={service.id} onClick={()=>setCurrentServiceId(service.id)}>
              <div className='serviceIcon'>
                <img src={service.img} alt={service.title} />
              </div>
              <div className='serviceInfo'>
                <h2>{service.title}</h2>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Projects Completed"/>
          <Counter  from={0} to={72} text="Happy Clients"/>
        </div>
      </div>
      <div className='sSection right'>
        {currentServiceId === 1 ? (<ComputerModalContainer />): currentServiceId === 2 ?
        (<MugModelContainer />):(<ConsoleModelContainer />)}
        
        
      </div>
    </div>
  );
};

export default Services;
