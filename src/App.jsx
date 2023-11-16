import { lazy , Suspense} from "react"
import { useLocation, Routes, Route } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"
//import {animated, useTransition } from "react-spring"
import {First, Room, Cards, Desktop, Projects, Cell, Arcade, Book} from './pages'

function App() {
  const location = useLocation()
  // const transitions = useTransition(location, {
  //   from: { opacity:0.3, filter: 'blur(100px)' ,transform: 'rotate(180deg)'},
  //   enter: { opacity:1,filter: 'blur(0px)', transform: 'rotate(0deg)'},
  //   leave: { opacity:0.3,filter: 'blur(100px)', transform: ' rotate(-180deg)'},
  //   config: {duration: 750},
  //   exitBeforeEnter: true
  // });
  console.log('%cThank You for visiting my Portfolio. Please consider hiring me!', 'font-weight: thin; color: #ff0000; font-size:3rem')
  return (
    <NextUIProvider>
      <Routes location={location}>
        <Route path="/" exact element={<First /> } />
        <Route path="/room" exact element={<Room />} />
        <Route path="/book" exact element={<Book /> } />
        <Route path="/cards" exact element={<Cards />}/>
        <Route path="/arcade" exact element={<Arcade />} />
        <Route path="/desktop" exact element={<Desktop />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/cell" exact element={<Cell />} />
      </Routes>
    </NextUIProvider>
  )
}

export default App

/*
{transitions((props, item) => (
  <animated.div style={props}>
    <Routes location={item}>
      <Route path="/" exact element={<Room />} />
      <Route path='/placeholder' exact element={<Placeholder />} />
    </Routes>
  </animated.div>
))}
*/