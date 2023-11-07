import { useGLTF, useTexture, Html } from "@react-three/drei"
import { memo, useRef } from "react"
//Debug


function RoomModels() {
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
    const resumeClick = (e) => {
        e.stopPropagation();
        window.open('https://drive.google.com/file/d/1TpmA0hnA6PjHiS66V1CX972sd64GfHQq/view?usp=sharing', '_blank')
        console.log("here!!!!!")
    }
    return (
        <>
            <mesh >
                <primitive object={room.scene} />
                <meshStandardMaterial map={texture} />
            </mesh>
            <group>
                <mesh >
                    <primitive object={arcade.scene} onClick={(e) => {e.stopPropagation(); console.log('Arcade')}}/>
                    <meshBasicMaterial />
                </mesh>
                <Html occlude position={[-1,1.4,0.75]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Arcade</h1>
                    </div>
                </Html>
            </group>
            <mesh >
                <primitive object={resume.scene} onClick={resumeClick} />
                <meshBasicMaterial />
                <Html occlude position={[-1.4,1.85,0.3]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2" onClick={resumeClick}>
                        <h1 className="text-white text-sm">Resume</h1>
                    </div>
                </Html>
            </mesh>
            <mesh >
                <primitive object={books.scene} onClick={() => console.log('Books ')} />
                <meshBasicMaterial />
                <Html occlude position={[-1.35,1.85,-0.65]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Books</h1>
                    </div>
                </Html>
            </mesh>
            <mesh >
                <primitive object={computer1.scene} onClick={() => console.log('Computer 1')} />
                <meshBasicMaterial />
                <Html occlude position={[-1.35,1.2,0.1]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Projects</h1>
                    </div>
                </Html>
            </mesh>
            <mesh >
                <primitive object={computer2.scene} onClick={() => console.log('Computer 2')}/>
                <meshBasicMaterial />
                <Html occlude position={[-1.4,1.2,-1.2]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Music</h1>
                    </div>
                </Html>
            </mesh>
            <mesh >
                <primitive object={computer3.scene} onClick={() => console.log('Computer 3')}/>
                <meshBasicMaterial />
                <Html occlude position={[-0.6,1.2,-1.3]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Computer</h1>
                    </div>
                </Html>
            </mesh>
            <mesh >
                <primitive object={tv.scene} onClick={() => console.log('TV')} />
                <meshBasicMaterial />
                <Html occlude position={[0.45,0.95,-1.1]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Tv</h1>
                    </div>
                </Html>
            </mesh>
            <mesh >
                <primitive object={picture1.scene} onClick={() => console.log('Picture 1')} />
                <meshBasicMaterial />
                <Html occlude position={[-0.3,2,-1.3]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2 w-24" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Picture 1</h1>
                    </div>
                </Html>
            </mesh>
            <mesh >
                <primitive object={picture2.scene} onClick={() => console.log('Picture 2')}/>
                <meshBasicMaterial />
                <Html occlude position={[0.7,1.2,-1.3]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2 w-24" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Picture 2</h1>
                    </div>
                </Html>
            </mesh>
            <mesh position={[-1.7,0.25,-0.7]}>
                <primitive object={cards.scene} onClick={() => console.log('Cards')}/>
                <meshBasicMaterial />
                <Html occlude position={[0.7,0.45,0.1]} >
                    <div className="bg-gradient-to-b from-sky-50/50 to-sky-500/50 rounded-full px-2" onClick={() => console.log('Clicked Test label')}>
                        <h1 className="text-white text-sm">Cards</h1>
                    </div>
                </Html>
            </mesh> 
        </>
    )
}

export default memo(RoomModels)

