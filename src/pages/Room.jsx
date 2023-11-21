import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loading } from "../pages";
import Scene from "../components/Scene";

export default function Room() {
  return (
    <>
      <div className="h-screen bg-slate-200">
        <Canvas shadows>
          <Suspense fallback={<Loading />}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
