import {Html} from '@react-three/drei'

export default function Loading() {
    
    return (
            <Html center>
                {/* <progress className="progress w-64" ></progress> */}
                <div className="h-screen w-screen bg-gradient-to-br from-blue-400 to-pink-400 flex justify-center items-center">
                    <progress className="progress w-96" ></progress>
                </div>
            </Html>
    )
}