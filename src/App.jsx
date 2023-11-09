import { useLocation, Routes, Route } from "react-router-dom"
import {animated, useTransition } from "react-spring"
import {Room, Placeholder, Book, Cards} from './pages'
import { NextUIProvider } from "@nextui-org/react"

function App() {
  const location = useLocation()
  // const transitions = useTransition(location, {
  //   from: { opacity:0.3, filter: 'blur(100px)' ,transform: 'rotate(180deg)'},
  //   enter: { opacity:1,filter: 'blur(0px)', transform: 'rotate(0deg)'},
  //   leave: { opacity:0.3,filter: 'blur(100px)', transform: ' rotate(-180deg)'},
  //   config: {duration: 750},
  //   exitBeforeEnter: true
    
  // });

  return (
    <NextUIProvider>
      <Routes location={location}>
        <Route path="/" exact element={<Room />} />
        <Route path='/placeholder' exact element={<Placeholder />} />
        <Route path="/book" exact element={<Book />} />
        <Route path="/cards" exact element={<Cards />} />
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