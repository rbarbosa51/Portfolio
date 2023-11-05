import { Suspense } from "react"
import { Canvas} from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import {Loading} from '../pages'
import {RoomModels} from '../components'

export default function Room() {
    

    return (
        <>
            <Canvas shadows camera={{position:[1.5, 3, 2], rotation:[0,0,0],fov: 20}}>
                <Suspense fallback={<Loading />}>
                    <color attach={'background'} args={['#000000']}/>
                    <OrbitControls />
                    <ambientLight intensity={3.0} />
                    <directionalLight intensity={5} />
                    <RoomModels />
                </Suspense>
            </Canvas>
        </>
    )
}