import {Html, useProgress} from '@react-three/drei'
import {Progress} from "@nextui-org/react";

export default function Loading() {
    const {progress} = useProgress()
    return (
            <Html center>
                <Progress size="lg" aria-label='Loading...' value={progress} showValueLabel={true} className='absolute w-96 -translate-x-1/2' />
            </Html>
    )
}