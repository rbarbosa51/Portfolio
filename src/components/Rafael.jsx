/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/RafaelAll.glb -o src/Rafael.jsx 
*/

import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Html } from "@react-three/drei";

const chatText = [
  "Greetings! My Name is: Rafael",
  "Second Text",
  "Third Text",
  "Yes, this is the greatest text line ever. Success!!!!!",
  "More lines. Text",
  "Bla Bla Bla",
];
const chatActions = [
  "Idle",
  "Salute",
  "Salsa",
  "Rallying",
  "Walking",
  "WaveTwo",
];

export function Rafael(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/RafaelAll.glb");
  const { actions } = useAnimations(animations, group);
  const [textPosition, setTextPosition] = useState(0);

  useEffect(() => {
    const action = chatActions[textPosition];
    //console.log(actions)
    actions[action].reset().fadeIn(0.5).play();
    return () => actions[action]?.fadeOut(0.5);
  }, [textPosition]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Rafael"
            geometry={nodes.Rafael.geometry}
            material={materials.All}
            skeleton={nodes.Rafael.skeleton}
          />
          <Html
            as="div"
            wrapperClass="w-96 bg-transparent"
            position={[0.3, 2.3, 0]}
          >
            <div className="chat chat-start">
              <div className="chat-bubble  bg-blue-400 text-white">
                {chatText[textPosition]}
                <div className="flex justify-end">
                  <button
                    className="btn btn-outline btn-xs mt-2 text-white"
                    onClick={() =>
                      setTextPosition((prev) => (prev + 1) % chatText.length)
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </Html>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/RafaelAll.glb");

//Actions
// Idle,
// Rallying,
// Salsa,
// Salute,
// Walking,
// WaveTwo,