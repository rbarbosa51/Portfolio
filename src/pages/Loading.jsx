import { Html } from "@react-three/drei";

export default function Loading() {
  return (
    <Html center>
      {/* <progress className="progress w-64" ></progress> */}
      <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400">
        <progress className="neonShadow progress mx-auto w-[50%]"></progress>
      </div>
    </Html>
  );
}
