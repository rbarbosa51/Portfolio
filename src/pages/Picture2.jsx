import { Canvas } from "@react-three/fiber"
import {OrbitControls, Environment, Sky} from '@react-three/drei'
import {Dog} from '../components/Dog'
import {Demon} from '../components/Demon'
import { Jail } from "../components/Jail"
import { useState } from "react"

export default function Picture2() {
    const [demonAction, setDemonAction] = useState('Weapon')
    const [dogState, setDogState] = useState('Idle')
    const [showJail, setShowJail] = useState(true);
    const clickBtn = () => {
      setDemonAction('Death');
      setDogState('Jump');
      setShowJail(false);
    }
    return (
        <div className="h-screen">
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={1.0} />
            <Environment preset="sunset" />
            <Sky distance={450000} sunPosition={[0,1,0]} inclination={0} azimuth={0.25} />
            <Demon position={[-2,-1,1.5]} rotation={[0,0.436332,0]} demonState={demonAction}/>
            <Dog position={[0,-1,-1]} dogState={dogState}/>
            {showJail && 
              <Jail position={[0,-1,-1]}/>
            }
          </Canvas>
          <div className="flex absolute bottom-4">
            <button className="btn btn-primary" onClick={clickBtn }>Click me</button>
          </div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center text-6xl text-green-600">
            <h1>Password</h1>
          </div>
        </div>
    )
}