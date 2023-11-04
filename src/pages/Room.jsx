import { NavLink } from "react-router-dom"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {Scene} from '../components'
import {Loading} from '../pages'

export default function Room() {
    return (
        <>
            <Canvas shadows camera={{position:[0,0,0], fov: 45}}>
                <color attach={'background'} args={['#ececec']} />
                <Suspense fallback={<Loading />}>
                    <Scene /> 

                </Suspense>
            </Canvas>
            {/* <NavLink to='/placeholder'>Placeholder</NavLink> */}
        </>
    )
}