import { useLocation, Routes, Route } from "react-router-dom"
import {animated, useTransition } from "react-spring"
import {Room, Placeholder} from './pages'

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
    <>
      <Routes location={location}>
        <Route path="/" exact element={<Room />} />
        <Route path='/placeholder' exact element={<Placeholder />} />
      </Routes>
    </>
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