import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Sky, Html } from "@react-three/drei"
import { Rafael } from "../components/Rafael"
import { useNavigate } from "react-router-dom"

export default function Picture1() {
    const navigate = useNavigate();
    return (
        <div className="h-screen relative">
      <Canvas >
        <ambientLight intensity={1.0} />
        <Environment preset="sunset" />
        <Sky distance={50} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  />
        {/* <OrbitControls enableZoom={true} enablePan={false} enableRotate={false} maxZoom={1.1} minZoom={0.9}/> */}
        
          {/* <Model /> */}
          {/* <Rafael position={[-1.5,-1,3]} rotation={[0,Math.PI * 0.25,0]}/> */}
          {/* <Rafael position={[-1.5,-1,3]} rotation={[0,0.261799,0]}/> */}
          <Rafael position={[0,-1,3.2]}/>
          <Html as="div" >
            {/* <div className="absolute   left-1/2 -translate-x-1/2"> */}
                <button className="neonText  w-16 lg:w-32 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80">Go Back</button>
            {/* </div> */}

            
          </Html>
        
      </Canvas>
    </div>
    )
}
//450000
//position={[-3,3.5,0]}