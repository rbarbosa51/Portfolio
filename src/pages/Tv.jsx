import {animate, useScroll, useSpring, motion} from 'framer-motion'
import {useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Tv() {
    const navigate = useNavigate();
    const {scrollYProgress} = useScroll();
    const animControl = useRef();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
    useScroll().scrollYProgress.on('change', (yProgress) => {
      if (!animControl.current) return;
      animControl.current.time = yProgress * animControl.current.duration;
    })
    const goBack = () => {
      navigate('/room');
    }
    useEffect(() => {
        animControl.current = animate([
          // ['#ball', {transform: `translate(${(window.innerWidth / 2) - 48}px, ${window.innerHeight / 2 - 48}px)`}, {ease: 'linear', duration: 3.0}],
          // ['#ball', {top: '50%'}, {ease: 'easeOut', duration: 2.0}],
          // ['#ball', {transform: `scaleX(2.0, 0.1)`}, {ease: 'linear', duration: 1.0}],
          ['#text0', {opacity: 0}, {ease: 'linear', duration: 2.0}],
          ['#text1', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text1', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#text2', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text2', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#divider1', {transform: 'translate(0%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#divider1', {transform: 'translate(100%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#text3', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text3', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#text4', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text4', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#text5', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text5', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#divider2', {transform: 'translate(0%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#divider2', {transform: 'translate(-100%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#text6', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text6', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#text7', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text7', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#divider3', {transform: 'translate(0%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#divider3', {transform: 'translate(100%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#text8', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text8', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#text9', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text9', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#divider4', {transform: 'translate(0%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#divider4', {transform: 'translate(-100%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#text10', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text10', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#text11', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text11', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#divider5', {transform: 'translate(0%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#divider5', {transform: 'translate(100%, 0%)'}, {ease: 'linear', duration: 3.0}],
          ['#text12', {opacity: 1}, {ease: 'linear', duration: 2.0}],
          ['#text12', {opacity: 0 }, {ease: 'linear', duration: 2.0}],
          ['#btnBack', {opacity: 1}, {ease: 'linear', duration: 1.0}]
          
          
    
        ])
        animControl.current.pause()
      }, [])
      
    return (
        <>
        <div className="tv ">
            <motion.div className='z-100 fixed top-0 left-0 right-0 origin0 h-1 bg-[#ebe8eb] neonShadow' style={{scaleX}}/>
            <div className='h-full w-full fixed'>
                <h1 id='text0' className='absolute opacity-1 left-1/2 -translate-x-1/2 bottom-4 neonText font-thin font-sans text-6xl'>Scroll to the Bottom</h1>
                <h1 id='text1' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl'>Hello</h1>
                <h1 id='text2' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>Are you looking for a Web Developer?</h1>
                <div id='divider1' className='absolute top-0 bg-[#06083c] h-screen w-screen -translate-x-[100%] '></div>
                <h1 id='text3' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>Are you concerned about hiring the wrong candidate?</h1>
                <h1 id='text4' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>A bad hire can create a toxic environment.</h1>
                <div id='divider2' className='absolute top-0 bg-[#d95659] h-screen w-screen translate-x-[100%] '></div>
                <h1 id='text5' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>Remember: a bad apple spoils the bunch</h1>
                <h1 id='text6' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>Fear Not</h1>
                <div id='divider3' className='absolute top-0 bg-[#aadbd0] h-screen w-screen -translate-x-[100%] '></div>
                <h1 id='text7' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>Do you want a candidate who will prioritize the team over the individual</h1>
                <h1 id='text8' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>Do you want someone who will prioritize your team's Objectives and Key Results Indicators</h1>
                <div id='divider4' className='absolute top-0 bg-[#34395f] h-screen w-screen translate-x-[100%] '></div>
                <h1 id='text9' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>A hire with the drive to continue self improving for the benefit of your team</h1>
                <h1 id='text10' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>No Drama, No Whinning...</h1>
                <div id='divider5' className='absolute top-0 bg-[#f33660] h-screen w-screen -translate-x-[100%] '></div>
                <h1 id='text11' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>Just Pure Work Ethics</h1>
                <h1 id='text12' className='absolute opacity-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  neonText font-thin font-sans text-6xl text-center'>Hire me!!!</h1>
                <button id='btnBack' className='absolute opacity-0 left-1/2 -translate-x-1/2 bottom-4 neonText font-thin font-sans text-4xl p-4 border rounded-xl' onClick={goBack}>Go Back</button>
            </div>
        </div>
        </>
    )
}