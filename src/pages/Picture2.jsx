import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { Dog } from "../components/Dog";
import { Demon } from "../components/Demon";
import { Jail } from "../components/Jail";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Picture2() {
  const [demonAction, setDemonAction] = useState("Weapon");
  const [showDemonChat, setShowDemonChat] = useState(true);
  const [demonChatText, setDemonChatText] = useState(
    "Password, or the dog gets it",
  );
  const [dogState, setDogState] = useState("Idle");
  const [dogChat, setDogChat] = useState(false);
  const [showJail, setShowJail] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [title, setTitle] = useState("Find the Password");
  const dialogRef = useRef();

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clickBtn = () => {
    if (password === "password123") {
      setDemonAction("Death");
      setDogState("Jump");
      setShowJail(false);
      setShowDemonChat(false);
      setDogChat(true);
      setShowButton(false);
      setTitle("Success!");
    } else {
      setWrongPassword(true);
      setDemonChatText("Wrong Password");
    }
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const enterPassword = (e) => {
    dialogRef.current.showModal();
  };
  return (
    <>
      <div className="h-screen">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={1.0} />
          <Environment preset="sunset" />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <group position={[0.8, 0, 0]}>
            <Demon
              position={[-2, -1.3, 1.5]}
              rotation={[0, 0.436332, 0]}
              demonState={demonAction}
              showDemonChat={showDemonChat}
              demonChatText={demonChatText}
            />
            <Dog
              position={[1, -1.3, -1]}
              dogState={dogState}
              dogChat={dogChat}
            />
            {showJail && <Jail position={[1, -1.3, -1]} />}
          </group>
        </Canvas>

        <div className="absolute left-1/2 top-2 -translate-x-1/2 text-center text-6xl text-green-600">
          <h1 className="neonText text-center text-6xl font-thin text-slate-200/80">
            {title}
          </h1>
        </div>
        <button
          className="neonText absolute left-4 top-4 rounded-xl bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary/80"
          onClick={() => navigate("/room")}
        >
          Go Back
        </button>
        {showButton && (
          <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-baseline gap-4">
            <button
              className="hover:neonText btn btn-outline mx-auto border-none bg-primary hover:bg-primary/80 "
              onClick={enterPassword}
            >
              Enter Password
            </button>
            <p className={`text-red-500 ${wrongPassword ? "" : "hidden"}`}>
              Wrong!
            </p>
          </div>
        )}
      </div>

      <dialog id="passwordModal" className="modal" ref={dialogRef}>
        <div className="modal-box bg-sky-100 text-slate-600/90">
          <h3 className="text-lg font-bold">Password</h3>
          <p className="py-4">Find the password and enter it here</p>
          <label htmlFor="enterPassword" className="mr-8">
            Password:
          </label>
          <input
            onChange={passwordChange}
            className="rounded-md px-2 outline outline-1"
            type="text"
            id="enterPassword"
            name="enterPassword"
          ></input>
          <div className="modal-action">
            {/* <button className="btn">Close</button> */}
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="hover:neonText btn btn-outline mx-auto border-none bg-primary hover:bg-primary/80"
                onClick={clickBtn}
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
