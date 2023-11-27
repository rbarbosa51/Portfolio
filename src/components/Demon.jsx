/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/Demon.gltf -o src/Demon.jsx 
*/

import { useRef, useEffect, useState, useContext } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import * as THREE from 'three'

export function Demon(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Demon.gltf')
  const { actions } = useAnimations(animations, group)
  const stateAction = props.demonState;
  useEffect(() => {
    if (stateAction === 'Weapon') {
      actions[stateAction]?.reset()?.fadeIn(0.5).setEffectiveTimeScale(0.4).play()
    } else {
      actions[stateAction].clampWhenFinished = true
      actions[stateAction]?.reset()?.fadeIn(0.5).setLoop(THREE.LoopOnce).setEffectiveTimeScale(0.25).play();
    }
    return () => actions[stateAction]?.fadeOut(0.5)
  }, [stateAction])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <skinnedMesh name="Demon" geometry={nodes.Demon.geometry} material={materials.Atlas} skeleton={nodes.Demon.skeleton} />
          <skinnedMesh name="Trident" geometry={nodes.Trident.geometry} material={materials.Atlas} skeleton={nodes.Trident.skeleton} />
        </group>
      </group>
      {props.showDemonChat && 
      <Html
          as="div"
          wrapperClass="bg-transparent"
          position={[1, 3, 0]}
        >
          <div className="chat chat-start w-128">
            <div className="chat-bubble bg-blue-400/80 text-white/80">
              {props.demonChatText}
            </div>
          </div>
        </Html>
        }
    </group>
  )
}

useGLTF.preload('/models/Demon.gltf')

//Death, Duck, Idle, Punch, Weapon