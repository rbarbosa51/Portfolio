import { OrbitControls, CameraControls, Sky, Environment } from "@react-three/drei"
import {PortfolioRoom} from './PortfolioRoom'
import { useEffect, useRef } from "react"
import { useControls } from "leva"
export default function Scene() {
    const cameraRef = useRef()
    const {cameraPosition} = useControls('cameraPosition', {
        cameraPosition: {
            value: {
                x: 0,
                y: 0,
                z: 5
            }
        }
    })
    useEffect(() => {

    }, [cameraPosition])
    return (
        <>
            <CameraControls  ref={cameraRef}/>
            <Sky />
            <Environment preset='forest'/>
            <PortfolioRoom />
        </>
    )
}