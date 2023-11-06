import {Text, Html, useProgress} from '@react-three/drei'

export default function Loading() {
    const {progress} = useProgress()
    return (
            <Html center>{progress} % loaded</Html>
    )
}