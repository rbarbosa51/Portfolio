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
      {/* <button
        className="neonText absolute left-4 top-4 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        onClick={() => navigate("/room")}
      >
        Go Back
      </button> */}
      <Button
        className="neonText absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-4 bottom-4 lg:top-4"
        color="primary"
        onClick={() => navigate("/room")}
      >
        Back
      </Button>
    </div>
  );
}
//450000
//position={[-3,3.5,0]}
