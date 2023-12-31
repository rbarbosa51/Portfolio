import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { Rafael } from "../components/Rafael";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Picture1() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1.0} />
        <Environment preset="sunset" />
        <Sky
          distance={50}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Rafael position={[-1, -1, 3.2]} />
      </Canvas>

      {/* <Button
        className="neonText absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-4 lg:top-4 lg:translate-x-0"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button> */}
      <Button
        //className="neonText absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-4 bottom-2 lg:top-4"
        className="neonText absolute left-4 top-4 z-[100] rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button>
      <div className="absolute left-1/2 top-1/2 z-50 hidden aspect-square h-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#60a6fb] p-4 text-white portrait:block">
        <h2 className="text-center text-4xl">Warning</h2>
        <p className="p-4 text-center text-xl">Please view in landscape mode</p>
      </div>
    </div>
  );
}
//450000
//position={[-3,3.5,0]}
