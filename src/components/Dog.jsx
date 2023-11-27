/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/Dog.gltf -o src/Dog.jsx 
*/

import { useRef, useEffect} from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'

export function Dog(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Dog.gltf')
  const { actions } = useAnimations(animations, group)
  //console.log(actions)
  const stateAction = props.dogState;
  //Dance, Death, Bite_Front, Jump, Walk, Yes, No
  //Jump & Idle
  useEffect(() => {
    actions[stateAction]?.reset()?.fadeIn(0.5).play();
    return () => actions[stateAction]?.fadeOut(0.5)
  }, [stateAction])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.Head} />
          <skinnedMesh name="Dog_Blob" geometry={nodes.Dog_Blob.geometry} material={materials.Atlas} skeleton={nodes.Dog_Blob.skeleton} />
        </group>
      </group>
      {props.dogChat && <Html
          as="div"
          wrapperClass="bg-transparent"
          position={[1.3, 2.5, 0]}
        >
          <div className="chat chat-start w-128">
            <div className="chat-bubble bg-blue-400/80 text-white/80">
              You saved me!!!
            </div>
          </div>
        </Html>}
    </group>
  )
}

useGLTF.preload('/models/Dog.gltf')