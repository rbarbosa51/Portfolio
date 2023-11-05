import { Suspense } from "react"
import { Canvas} from "@react-three/fiber"
import {Loading} from '../pages'
import Scene from "../components/Scene"

export default function Room() {
    

    return (
        <>
            {/* <Canvas shadows camera={{position:[1.5, 3, 2], rotation:[0,0,0],fov: 20}}> */}
            <Canvas shadows >
                <Suspense fallback={<Loading />}>
                    <Scene />
                </Suspense>
            </Canvas>
        </>
    )
}