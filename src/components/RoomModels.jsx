import { useGLTF, useTexture, Html } from "@react-three/drei";
import { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DoubleSide } from "three";
function RoomModels() {
  const navigate = useNavigate();
  const [musicDialog, setMusicDialog] = useState(false);
  const [hovered, setHovered] = useState(false);

  const room = useGLTF("/models/room.glb");
  const arcade = useGLTF("/models/arcade.glb");
  const resume = useGLTF("/models/resume.glb");
  const books = useGLTF("/models/books.glb");
  const computer1 = useGLTF("/models/computer1.glb");
  const computer2 = useGLTF("/models/computer2.glb");
  const computer3 = useGLTF("/models/computer3.glb");
  const tv = useGLTF("/models/tv.glb");
  const texture = useTexture("/models/roomtexture.png");
  const picture1 = useGLTF("/models/Picture1aTex.glb");
  const texturePicture = useTexture("/models/Picture2Texture.png");
  const picture2 = useGLTF("/models/Picture2Tex.glb");
  const texturePicture2 = useTexture("/models/Picture2.png");
  const cards = useGLTF("/models/cards.glb");
  const cell = useGLTF("/models/cell.glb");

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  const resumeClick = (e) => {
    e.stopPropagation();
    window.open(
      "https://drive.google.com/file/d/19Spm7JkAt2ReJDG3wJdiKIavdNU1xM6N/view?usp=sharing",
      "_blank",
    );
  };
  const bookClick = (e) => {
    e.stopPropagation();
    navigate("/book");
  };
  const musicClick = (e) => {
    e.stopPropagation();
    setMusicDialog(!musicDialog);
  };
  const cardsClick = (e) => {
    e.stopPropagation();
    navigate("/cards");
  };
  const arcadeClick = (e) => {
    e.stopPropagation();
    navigate("/arcade");
  };
  const desktopClick = (e) => {
    e.stopPropagation();
    navigate("/desktop");
  };
  const projectsClick = (e) => {
    e.stopPropagation();
    navigate("/projects");
  };
  const cellClick = (e) => {
    e.stopPropagation();
    navigate("/cell");
  };
  const tvClick = (e) => {
    e.stopPropagation();
    navigate("/tv");
  };
  const picture1Click = (e) => {
    e.stopPropagation();
    navigate("/picture1");
  };
  const picture2Click = (e) => {
    e.stopPropagation();
    navigate("/picture2");
  };
  return (
    <>
      <mesh>
        <primitive object={room.scene} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <group>
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <primitive object={arcade.scene} onClick={arcadeClick} />
          <meshBasicMaterial />
        </mesh>
        <Html occlude position={[-1, 1.4, 0.75]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={arcadeClick}
          >
            <h1 className="text-sm text-white">Arcade</h1>
          </div>
        </Html>
      </group>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={resume.scene} onClick={resumeClick} />
        <meshBasicMaterial />
        <Html occlude position={[-1.4, 1.85, 0.3]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={resumeClick}
          >
            <h1 className="text-sm text-white">Resume</h1>
          </div>
        </Html>
      </mesh>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={books.scene} onClick={bookClick} />
        <meshBasicMaterial />
        <Html occlude position={[-1.35, 1.85, -0.65]} onClick={bookClick}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={() => console.log("Clicked Test label")}
          >
            <h1 className="text-sm text-white">Books</h1>
          </div>
        </Html>
      </mesh>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={computer1.scene} onClick={projectsClick} />
        <meshBasicMaterial />
        <Html occlude position={[-1.35, 1.2, 0.1]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={projectsClick}
          >
            <h1 className="text-sm text-white">Projects</h1>
          </div>
        </Html>
      </mesh>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={computer2.scene} onClick={musicClick} />
        <meshBasicMaterial />
        <Html occlude position={[-1.4, 1.2, -1.2]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={musicClick}
          >
            <h1 className="text-sm text-white">Music</h1>
          </div>
        </Html>
      </mesh>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={computer3.scene} onClick={desktopClick} />
        <meshBasicMaterial />
        <Html occlude position={[-0.6, 1.2, -1.3]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={desktopClick}
          >
            <h1 className="text-sm text-white">Computer</h1>
          </div>
        </Html>
      </mesh>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={tv.scene} onClick={tvClick} />
        <meshBasicMaterial />
        <Html occlude position={[0.45, 0.95, -1.1]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={tvClick}
          >
            <h1 className="text-sm text-white">Tv</h1>
          </div>
        </Html>
      </mesh>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={picture1.scene} onClick={picture1Click} />
        <meshBasicMaterial map={texturePicture} side={DoubleSide} />
        <Html occlude position={[-0.3, 1.8, -1.3]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={picture1Click}
          >
            <h1 className="text-sm text-white">Rafael</h1>
          </div>
        </Html>
      </mesh>

      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={picture2.scene} onClick={picture2Click} />
        <meshBasicMaterial map={texturePicture2} />
        <Html occlude position={[0.7, 1.2, -1.3]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={picture2Click}
          >
            <h1 className="text-sm text-white">Password</h1>
          </div>
        </Html>
      </mesh>
      <mesh
        position={[-1.7, 0.25, -0.7]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={cards.scene} onClick={cardsClick} />
        <meshBasicMaterial />
        <Html occlude position={[0.7, 0.45, 0.1]}>
          <div
            className="rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={cardsClick}
          >
            <h1 className="text-sm text-white">Cards</h1>
          </div>
        </Html>
      </mesh>
      <Html
        position={[0.3, 2, 0.7]}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 ${
          musicDialog === false ? "hidden" : ""
        }`}
      >
        <div className="flex w-96 flex-col items-center justify-between rounded-2xl bg-white/20 p-4">
          <div className="flex w-[90%] items-center justify-between ">
            <h1 className="text-center text-xl text-white ">Music Time!</h1>
            <button
              className="hover:neonShadow btn btn-circle mb-2 border-none bg-white/80"
              onClick={() => setMusicDialog(!musicDialog)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <iframe
            src="https://open.spotify.com/embed/playlist/615C4KPn26qAf8Gi4IbsBm?utm_source=generator"
            width="90%"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay"
            loading="lazy"
          ></iframe>
        </div>
      </Html>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={cell.scene} onClick={cellClick} />
        <meshBasicMaterial />
        <Html occlude position={[0.4, 0.55, 0.3636]}>
          <div
            className="w-24 rounded-full bg-gradient-to-b from-sky-50/50 to-sky-500/50 px-2 hover:cursor-pointer"
            onClick={cellClick}
          >
            <h1 className="text-sm text-white">Contact Me</h1>
          </div>
        </Html>
      </mesh>
    </>
  );
}

export default memo(RoomModels);
