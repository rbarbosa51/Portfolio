import { lazy , Suspense} from "react"
import { useLocation, Routes, Route } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"
//import {animated, useTransition } from "react-spring"
import {HtmlLoading} from './pages'
const Room = lazy(() => import('./pages/Room'))
const Cards = lazy(() => import('./pages/Cards'))
const Desktop = lazy(() => import('./pages/Desktop'))
const Projects = lazy(() => import('./pages/Projects'))
const Cell = lazy(() => import('./pages/Cell'))
const Arcade = lazy(() => import('./pages/Arcade'))
const Book = lazy(() => import('./pages/Book'))


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
        <Route path="/" exact element={<Suspense fallback={<HtmlLoading />}><Room /></Suspense> } />
        <Route path="/book" exact element={<Suspense fallback={<HtmlLoading />}><Book /></Suspense>} />
        <Route path="/cards" exact element={<Suspense fallback={<HtmlLoading />}><Cards /></Suspense>}/>
        <Route path="/arcade" exact element={<Suspense fallback={<HtmlLoading />}><Arcade /></Suspense>} />
        <Route path="/desktop" exact element={<Suspense fallback={<HtmlLoading />}><Desktop /></Suspense>} />
        <Route path="/projects" exact element={<Suspense fallback={<HtmlLoading />}><Projects /></Suspense>} />
        <Route path="/cell" exact element={<Suspense fallback={<HtmlLoading />}><Cell /></Suspense>} />
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