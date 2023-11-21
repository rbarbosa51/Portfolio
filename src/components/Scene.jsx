import RoomModels from "./RoomModels";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useControls, button } from "leva";

export default function Scene() {
  const cameraControlsRef = useRef();
  const isZoomed = useRef();
  isZoomed.current = false;
  const cameraControls = useControls("Camera Reset", {
    Reset: button(() => {
      cameraControlsRef.current.setLookAt(
        1.875,
        2.3403,
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
    }),
  });

  useEffect(() => {
    // cameraControlsRef.current.setLookAt(3, 1.3403, 3, -2, 1.5, -2, true)
    cameraControlsRef.current.setLookAt(3, 2, 3, -2, 1.5, -2, true);
    // cameraControlsRef.current.zoom(-0.25, true);
  }, []);
  return (
    <>
      <color attach={"background"} args={["#000000"]} />
      <PerspectiveCamera
        makeDefault
        fov={30}
        position={[1.875, 3.3403, 1.8246]}
      />
      <CameraControls
        ref={cameraControlsRef}
        smoothTime={0.25}
        azimuthRotateSpeed={0.1}
        polarRotateSpeed={0.1}
        maxAzimuthAngle={Math.PI / 2}
      />

      <ambientLight intensity={3.0} />
      <directionalLight intensity={5} />
      <RoomModels />
    </>
  );
}
