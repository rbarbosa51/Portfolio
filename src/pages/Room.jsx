import { Suspense } from "react"
import { Canvas} from "@react-three/fiber"

import {Loading} from '../pages'
import { Scene } from "../components"



export default function Room() {
    

    return (
        <>
            <Canvas shadows camera={{position:[0, 3, 5], rotation:[0,0,0],fov: 45}}>
                <Suspense fallback={<Loading />}>
                    <Scene />
                    
                </Suspense>
            </Canvas>
        </>
    )
}