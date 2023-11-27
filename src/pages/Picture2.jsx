import { Canvas } from "@react-three/fiber"
import {OrbitControls, Environment, Sky} from '@react-three/drei'
import {Dog} from '../components/Dog'
import {Demon} from '../components/Demon'
import { Jail } from "../components/Jail"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Picture2() {
    const [demonAction, setDemonAction] = useState('Weapon');
    const [showDemonChat, setShowDemonChat] = useState(true);
    const [dogState, setDogState] = useState('Idle');
    const [dogChat, setDogChat] = useState(false);
    const [showJail, setShowJail] = useState(true);
    const navigate = useNavigate();
    const clickBtn = () => {
      setDemonAction('Death');
      setDogState('Jump');
      setShowJail(false);
      setShowDemonChat(false);
      setDogChat(true);
    }
    return (
        <div className="h-screen">
          <Canvas>
            <OrbitControls enableZoom={false} enablePan={false}/>
            <ambientLight intensity={1.0} />
            <Environment preset="sunset" />
            <Sky distance={450000} sunPosition={[0,1,0]} inclination={0} azimuth={0.25} />
            <group position={[0.8,0,0]}>

            <Demon position={[-2,-1.3,1.5]} rotation={[0,0.436332,0]} demonState={demonAction} showDemonChat={showDemonChat}/>
            <Dog position={[1,-1.3,-1]} dogState={dogState} dogChat={dogChat}/>
            {showJail && 
              <Jail position={[1,-1.3,-1]}/>
            }
            </group>
          </Canvas>
          <div className="flex absolute bottom-4">
            <button className="btn btn-primary" onClick={clickBtn }>Click me</button>
          </div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center text-6xl text-green-600">
            <h1 className="neonText text-center text-6xl font-thin text-slate-200/80">Find the Password</h1>
          </div>
          <button
          className="neonText absolute left-4 top-4 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
          onClick={() => navigate("/room")}
        >
          Go Back
        </button>
        </div>
    )
}