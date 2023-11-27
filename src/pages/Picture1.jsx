import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { Rafael } from "../components/Rafael";
import { useNavigate } from "react-router-dom";

export default function Picture1() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen">
      <Canvas>
        <ambientLight intensity={1.0} />
        <Environment preset="sunset" />
        <Sky
          distance={50}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Rafael position={[0, -1, 3.2]} />
      </Canvas>
      <button
        className="neonText absolute left-4 top-4 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
        onClick={() => navigate("/room")}
      >
        Go Back
      </button>
    </div>
  );
}
//450000
//position={[-3,3.5,0]}
