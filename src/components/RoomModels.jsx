import { useGLTF, useTexture, Html } from "@react-three/drei"
import { memo, useRef } from "react"
//Debug
import { useThree } from "@react-three/fiber";

function RoomModels() {
    const three = useThree();
    const room = useGLTF('/models/room.glb')
    const arcade = useGLTF('/models/arcade.glb')
    const resume = useGLTF('/models/resume.glb')
    const books = useGLTF('/models/books.glb')
    const computer1 = useGLTF('/models/computer1.glb')
    const computer2 = useGLTF('/models/computer2.glb')
    const computer3 = useGLTF('/models/computer3.glb')
    const tv = useGLTF('/models/tv.glb')
    const texture = useTexture('/models/roomtexture.png')
    const picture1 = useGLTF('/models/picture1.glb')
    const picture2 = useGLTF('/models/picture2.glb')
    const cards = useGLTF('/models/cards.glb')

    return (
        <>
            <mesh onClick={() => console.log(three)}>
                <primitive object={room.scene} />
                <meshStandardMaterial map={texture} />
            </mesh>
            <mesh >
                <primitive object={arcade.scene} onClick={(e) => {e.stopPropagation(); console.log('Arcade')}}/>
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={resume.scene} onClick={() => console.log('resume')} />
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={books.scene} onClick={() => console.log('Books ')} />
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={computer1.scene} onClick={() => console.log('Computer 1')} />
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={computer2.scene} onClick={() => console.log('Computer 2')}/>
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={computer3.scene} onClick={() => console.log('Computer 3')}/>
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={tv.scene} onClick={() => console.log('TV')} />
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={picture1.scene} onClick={() => console.log('Picture 1')} />
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={picture2.scene} onClick={() => console.log('Picture 2')}/>
                <meshBasicMaterial />
            </mesh>
            <mesh >
                <primitive object={cards.scene} onClick={() => console.log('Cards')}/>
                <meshBasicMaterial />
            </mesh>
        </>
    )
}

export default memo(RoomModels)