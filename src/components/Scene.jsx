import RoomModels from "./RoomModels";
import { CameraControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useControls, button } from "leva";
import { useThree } from "@react-three/fiber";

export default function Scene() {
  const { camera } = useThree();
  const cameraControlsRef = useRef();

  const resetCamera = () => {
    cameraControlsRef.current.setLookAt(2.175, 2.2403, 1.9246, -2, 0, -2, true);
    cameraControlsRef.current.rotate(0, 0, true);
  };
  useControls("Camera Reset", {
    Reset: button(() => {
      resetCamera();
    }),
  });

  useEffect(() => {
    resetCamera();
  }, []);

  return (
    <>
      <color attach={"background"} args={["#000000"]} />
      <CameraControls
        ref={cameraControlsRef}
        smoothTime={0.25}
        azimuthRotateSpeed={0.1}
        polarRotateSpeed={0.1}
      />

      <ambientLight intensity={3.0} />
      <directionalLight intensity={5} />
      <RoomModels />
    </>
  );
}
