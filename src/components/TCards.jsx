import { useState } from "react"
import {useSprings, animated, to as interpolate} from 'react-spring'
import { useDrag } from "@use-gesture/react"

const cards = [
    '/cards/Courage.png',
    '/cards/Devotion.png',
    '/cards/Excellence.png',
    '/cards/ForwardThinking.png',
    '/cards/HardWork.png',
    '/cards/Leadership.png',
    '/cards/Loyalty.png',
    '/cards/Minority.png',
    '/cards/SalsaDancing.png',
    '/cards/TeamBuilder.png',
    '/cards/Veteran.png',
    '/cards/WebProgrammer.png',
    '/cards/PuertoRican.png',
]

const to = (i) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
})
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function TCards() {
    const [gone] = useState(() => new Set())
    const [props, api] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(i),
      })) 
      const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
        const trigger = velocity[0] > 0 
        
        const dir = xDir < 0 ? -1 : 1 
        if (!down && trigger) gone.add(index) 
        api.start(i => {
        
          if (index !== i) return 
          const isGone = gone.has(index)
          const x = isGone ? (100 + window.innerWidth * 0.5) * dir : down ? mx : 0 
          const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) 
          const scale = down ? 1.5 : 1 
          
          return {
            x,
            rot,
            scale,
            delay: undefined,
            config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
          }
        })
        if (!down && gone.size === cards.length)
          setTimeout(() => {
            gone.clear()
            api.start(i => to(i))
          }, 600)
      })
    return (
        <div className="relative bg-gradient-to-br from-blue-400 to-pink-400 flex flex-col text-center items-center justify-center h-full text-white/80">
            <h1 className="absolute top-2 w-72 left-1/2 -translate-x-1/2 text-6xl font-thin text-slate-200/80 neonText" >Know Me</h1>
            
            <div className="absolute hidden md:block top-16 left-1/2 -translate-x-1/2 text-xl font-thin mt-2 neonText"><span className="underline">Grab</span> a Card and <span className="underline">throw</span> it either left or right</div>
            {props.map(({ x, y, rot, scale }, i) => (
              <animated.div className={'absolute  w-[300px] h-[200px] will-change-transform flex items-center justify-center touch-none'} key={i} style={{ x, y }}>
                
                <animated.div
                  {...bind(i)}
                  style={{
                    transform: interpolate([rot, scale], trans),
                    backgroundImage: `url(${cards[i]})`,
                  }}
                  className={'bg-white cursor-grab bg-cards bg-no-repeat bg-center w-[60%] max-width-[150px] h-[85vh] max-h-[285px] will-change-transform [border-radius: 10px] shadow-lg touch-none'}
                />
              </animated.div>
            ))}
        </div>
    )
}

/*
w-[300px] h-[200px]

*/