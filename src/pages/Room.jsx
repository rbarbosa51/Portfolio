import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sky, Environment } from "@react-three/drei"
import {Loading} from '../pages'
import {PortfolioRoom} from '../components/PortfolioRoom'

export default function Room() {
    return (
        <>
            <Canvas shadows camera={{position:[0,0,5], fov: 45}}>
                {/* <color attach={'background'} args={['#ececec']} /> */}
                <Suspense fallback={<Loading />}>
                    {/* <Scene />  */}
                    <OrbitControls />
                    <Sky />
                    <Environment preset='forest'/>
                    {/* <Room /> */}
                    {/* <mesh scale={[1,1,1]} position-y={0}>
                      <boxGeometry />
                      <meshStandardMaterial color={'white'} />
                    </mesh> */}
                    <PortfolioRoom />

                </Suspense>
            </Canvas>
            {/* <NavLink to='/placeholder'>Placeholder</NavLink> */}
        </>
    )
}