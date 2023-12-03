import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
//import { useEffect, useRef } from "react";

export default function First() {
  //const full = useRef()
  // useEffect(() => {
  //   if (!document.fullscreenElement) {
  //     document.documentElement.requestFullscreen();
  //   } else if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   }
  // }, [])
  const fullScreenStart = () => {
    const toMatch = ['/Android/i, /iPhone/i, /iPad/i'];
    const isMobile = toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem)
    })
    if (isMobile) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        screen.orientation.lock('landscape-primary').then(() => {}).catch(error => console.log(error))
      } 
    }
    
    navigate('/room')
  }
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-400">
      <h1 className="neonText py-4 text-center text-5xl md:text-6xl font-thin text-slate-200/80 mx-8 lg:mx-0">
        Welcome to my Room
      </h1>
      <div className="neonText mt-2 text-center text-2xl font-thin text-slate-200/80 mx-8 lg:mx-0">
        Please enter and enjoy my Developer Profile.
      </div>
      <Button
        className="neonText absolute left-1/2 top-1/2 -translate-x-1/2"
        size="lg"
        color="primary"
        //onClick={() => navigate("/room")}
        onClick={fullScreenStart}
      >
        Enter
      </Button>
      <div className="absolute bottom-4 portrait:block hidden neonText text-2xl font-thin text-slate-200/80 mx-8 lg:mx-0">
        For a better experience, please view in fullscreen landscape mode.
      </div>
    </div>
  );
}
