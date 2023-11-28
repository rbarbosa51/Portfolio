// import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { Loading } from "../pages";
import Scene from "../components/Scene";

export default function Room() {
  return (
    <>
      <div className="h-screen">
        <Canvas shadows camera={{ position: [2.175, 2.2403, 1.9246], fov: 35 }}>
          {/* <Suspense fallback={<Loading />}> */}
          <Scene />
          {/* </Suspense> */}
        </Canvas>
      </div>
    </>
  );
}
