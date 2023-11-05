import RoomModels from "./RoomModels"
import { OrbitControls } from "@react-three/drei"

export default function Scene() {
    return (
        <>
            <color attach={'background'} args={['#000000']}/>
            <OrbitControls />
            <ambientLight intensity={3.0} />
            <directionalLight intensity={5} />
            <RoomModels />
        </>
    )
}