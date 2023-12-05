import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";

export default function Room() {
  return (
    <>
      <div className={`h-screen`}>
        <Canvas shadows camera={{ position: [2.175, 2.2403, 1.9246], fov: 35 }}>
          <Scene />
        </Canvas>
        <div className="absolute left-1/2 top-1/2 z-50 hidden aspect-square h-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#60a6fb] p-4 text-white portrait:block">
          <h2 className="text-center text-4xl">Warning</h2>
          <p className="p-4 text-center text-xl">
            Please view in landscape mode
          </p>
        </div>
      </div>
    </>
  );
}
