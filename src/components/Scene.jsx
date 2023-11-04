import { OrbitControls, CameraControls, Sky, Environment } from "@react-three/drei"
import {PortfolioRoom} from './PortfolioRoom'
import { useEffect, useRef } from "react"
//debug
import { useControls } from "leva"
import { useThree } from "@react-three/fiber"

export default function Scene() {
    const cameraRef = useRef()
    const three = useThree()
    const {cameraPosition} = useControls('cameraPosition', {
        cameraPosition: {
            value: {
                x: 0,
                y: 0,
                z: 5
            }
        },
        
    })
    const {cameraLookAt} = useControls('cameraLookAt', {
        cameraLookAt: {
            value: {
                x: 0, 
                y: 0,
                z: 0
            }
        }
    })
    const {bVal} = useControls('debug', {
        bVal: {
            value: false
        }
    })
    // useEffect(() => {
    //     cameraRef.current.setLookAt(cameraPosition.x, cameraPosition.y, cameraPosition.z,cameraLookAt.x, cameraLookAt.y, cameraLookAt.z,true)
    //     console.log(three.camera.position);
    // }, [cameraPosition])
    useEffect(() => {
        console.log(cameraRef.current.camera.position)
    },[bVal])
    return (
        <>
            <CameraControls  ref={cameraRef}/>
            {/* <Sky />
            <Environment preset='forest'/> */}
            {/* <ambientLight intensity={1.0} /> */}
            <directionalLight intensity={2.0} position={[2,5,3]}/>
            <PortfolioRoom />
        </>
    )
}