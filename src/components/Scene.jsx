import RoomModels from "./RoomModels";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useControls, button } from "leva";
import { useThree } from "@react-three/fiber";

export default function Scene() {
  const {camera} = useThree();
  const cameraControlsRef = useRef();
  const isZoomed = useRef();
  isZoomed.current = false;
  const resetCamera = () => {
    cameraControlsRef.current.setLookAt(
      1.875,
      2.1403,
      1.8246,
      -2,
      0,
      -2,
      true,
    );
    cameraControlsRef.current.rotate(0, 0, true);
    if (!isZoomed.current) {
      cameraControlsRef.current.zoom(-0.25, true);
      isZoomed.current = true;
    }
  }
  useControls("Camera Reset", {
    Reset: button(() => {
      resetCamera();
    }),
  });

  useEffect(() => {
    
    // cameraControlsRef.current.setLookAt(3, 1.3403, 3, -2, 1.5, -2, true)
    // cameraControlsRef.current.setLookAt(3, 2, 3, -2, 1.5, -2, true);
    //cameraControlsRef.current.rotate(0,0,true);
    //cameraControlsRef.current.setLookAt(1.875,2.1403,1.8246,-2,0,-2, true)
    //camera.lookAt(-2,0,-2)
    // cameraControlsRef.current.zoom(-0.25, true);
    resetCamera()
    
  }, []);
  
  return (
    <>
      <color attach={"background"} args={["#000000"]} />
      <PerspectiveCamera
        makeDefault
        fov={30}
        position={[1.875, 2.1403, 1.8246]}
        rotation={[0,0,0]}
      />
      <CameraControls
        ref={cameraControlsRef}
        smoothTime={0.25}
        azimuthRotateSpeed={0.1}
        polarRotateSpeed={0.1}
        // maxAzimuthAngle={Math.PI / 2}
        // azimuthAngle={Math.PI}
        // polarAngle={-Math.PI / 2}
        
      />

      <ambientLight intensity={3.0} />
      <directionalLight intensity={5} />
      <RoomModels />
    </>
  );
}
