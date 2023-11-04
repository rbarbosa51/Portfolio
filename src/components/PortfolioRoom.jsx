/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/PortfolioRoom0.5.glb -o src/components/PortfolioRoom.jsx -k --shadows 
*/

import React, { useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'


export function PortfolioRoom(props) {
  const { nodes, materials } = useGLTF('./models/PortfolioRoom.glb')

  return (
    <group {...props} dispose={null}>
      <mesh name="room" castShadow receiveShadow geometry={nodes.room.geometry} material={materials.WALL} position={[0.666, 0.364, 0.179]} />
      <mesh name="table1" castShadow receiveShadow geometry={nodes.table1.geometry} material={materials.wood} position={[0.666, 0.364, 0.179]} />
      <group name="sofa" position={[0.666, 0.364, 0.179]}>
        <mesh name="sofa_1" castShadow receiveShadow geometry={nodes.sofa_1.geometry} material={materials.read} />
        <mesh name="sofa_2" castShadow receiveShadow geometry={nodes.sofa_2.geometry} material={materials.black} />
      </group>
      <mesh name="tablecards" castShadow receiveShadow geometry={nodes.tablecards.geometry} material={materials.wood} position={[0.666, 0.364, 0.179]} />
      <mesh name="table2" castShadow receiveShadow geometry={nodes.table2.geometry} material={materials.wood} position={[0.666, 0.364, 0.179]} />
      <mesh name="pipe2" castShadow receiveShadow geometry={nodes.pipe2.geometry} material={materials.METAL} position={[0.666, 0.364, 0.179]} />
      <mesh name="pipe4" castShadow receiveShadow geometry={nodes.pipe4.geometry} material={materials.METAL} position={[0.666, 0.364, 0.179]} />
      <mesh name="pipe1" castShadow receiveShadow geometry={nodes.pipe1.geometry} material={materials.METAL} position={[0.666, 0.364, 0.179]} />
      <group name="computer3" position={[0.666, 0.364, 0.179]}>
        <mesh name="computer3_1" castShadow receiveShadow geometry={nodes.computer3_1.geometry} material={materials.computer} />
        <mesh name="computer3_2" castShadow receiveShadow geometry={nodes.computer3_2.geometry} material={materials.grey} />
        <mesh name="computer3_3" castShadow receiveShadow geometry={nodes.computer3_3.geometry} material={materials.black} />
        <mesh name="computer3_4" castShadow receiveShadow geometry={nodes.computer3_4.geometry} material={materials.read} />
        <mesh name="computer3_5" castShadow receiveShadow geometry={nodes.computer3_5.geometry} material={materials.led} />
        <mesh name="computer3_6" castShadow receiveShadow geometry={nodes.computer3_6.geometry} material={materials.whitescreen} />
      </group>
      <group name="books" position={[0.666, 0.364, 0.179]}>
        <mesh name="books_1" castShadow receiveShadow geometry={nodes.books_1.geometry} material={materials.fiolet} />
        <mesh name="books_2" castShadow receiveShadow geometry={nodes.books_2.geometry} material={materials.orang} />
        <mesh name="books_3" castShadow receiveShadow geometry={nodes.books_3.geometry} material={materials.blue} />
        <mesh name="books_4" castShadow receiveShadow geometry={nodes.books_4.geometry} material={materials.gren} />
      </group>
      <group name="tv" position={[0.666, 0.364, 0.179]}>
        <mesh name="tv_1" castShadow receiveShadow geometry={nodes.tv_1.geometry} material={materials['black glas']} />
        <mesh name="tv_2" castShadow receiveShadow geometry={nodes.tv_2.geometry} material={materials.black} />
        <mesh name="tv_3" castShadow receiveShadow geometry={nodes.tv_3.geometry} material={materials.grey} />
        <mesh name="tv_4" castShadow receiveShadow geometry={nodes.tv_4.geometry} material={materials.led} />
        <mesh name="tv_5" castShadow receiveShadow geometry={nodes.tv_5.geometry} material={materials.whitescreen} />
      </group>
      <group name="computer2" position={[0.666, 0.364, 0.179]}>
        <mesh name="computer2_1" castShadow receiveShadow geometry={nodes.computer2_1.geometry} material={materials.black} />
        <mesh name="computer2_2" castShadow receiveShadow geometry={nodes.computer2_2.geometry} material={materials.computer} />
        <mesh name="computer2_3" castShadow receiveShadow geometry={nodes.computer2_3.geometry} material={materials.grey} />
        <mesh name="computer2_4" castShadow receiveShadow geometry={nodes.computer2_4.geometry} material={materials.read} />
        <mesh name="computer2_5" castShadow receiveShadow geometry={nodes.computer2_5.geometry} material={materials.led} />
        <mesh name="computer2_6" castShadow receiveShadow geometry={nodes.computer2_6.geometry} material={materials.whitescreen} />
      </group>
      <group name="arcade" position={[0.666, 0.364, 0.179]}>
        <mesh name="arcade_1" castShadow receiveShadow geometry={nodes.arcade_1.geometry} material={materials.avtomat} />
        <mesh name="arcade_2" castShadow receiveShadow geometry={nodes.arcade_2.geometry} material={materials.black} />
        <mesh name="arcade_3" castShadow receiveShadow geometry={nodes.arcade_3.geometry} material={materials.gren2} />
        <mesh name="arcade_4" castShadow receiveShadow geometry={nodes.arcade_4.geometry} material={materials.yelow} />
        <mesh name="arcade_5" castShadow receiveShadow geometry={nodes.arcade_5.geometry} material={materials.read} />
        <mesh name="arcade_6" castShadow receiveShadow geometry={nodes.arcade_6.geometry} material={materials.grey} />
        <mesh name="arcade_7" castShadow receiveShadow geometry={nodes.arcade_7.geometry} material={materials.led} />
        <mesh name="arcade_8" castShadow receiveShadow geometry={nodes.arcade_8.geometry} material={materials.whitescreen} />
      </group>
      <group name="computer1" position={[0.666, 0.364, 0.179]}>
        <mesh name="computer1_1" castShadow receiveShadow geometry={nodes.computer1_1.geometry} material={materials.grey} />
        <mesh name="computer1_2" castShadow receiveShadow geometry={nodes.computer1_2.geometry} material={materials.computer} />
        <mesh name="computer1_3" castShadow receiveShadow geometry={nodes.computer1_3.geometry} material={materials.black} />
        <mesh name="computer1_4" castShadow receiveShadow geometry={nodes.computer1_4.geometry} material={materials.whitescreen} />
      </group>
      <group name="chair" position={[0.666, 0.364, 0.179]}>
        <mesh name="chair_1" castShadow receiveShadow geometry={nodes.chair_1.geometry} material={materials.METAL} />
        <mesh name="chair_2" castShadow receiveShadow geometry={nodes.chair_2.geometry} material={materials.black} />
        <mesh name="chair_3" castShadow receiveShadow geometry={nodes.chair_3.geometry} material={materials.read} />
      </group>
      <mesh name="bucket" castShadow receiveShadow geometry={nodes.bucket.geometry} material={materials.grey} position={[0.666, 0.364, 0.179]} />
      <group name="picture1" position={[0.666, 0.364, 0.179]}>
        <mesh name="picture1_1" castShadow receiveShadow geometry={nodes.picture1_1.geometry} material={materials['black glas']} />
        <mesh name="picture1_2" castShadow receiveShadow geometry={nodes.picture1_2.geometry} material={materials.picture} />
      </group>
      <group name="picture2" position={[0.666, 0.364, 0.179]}>
        <mesh name="picture2_1" castShadow receiveShadow geometry={nodes.picture2_1.geometry} material={materials['black glas']} />
        <mesh name="picture2_2" castShadow receiveShadow geometry={nodes.picture2_2.geometry} material={materials.picture} />
      </group>
      <mesh name="wood" castShadow receiveShadow geometry={nodes.wood.geometry} material={materials.wood} position={[0.666, 0.364, 0.179]} />
      <mesh name="resume" castShadow receiveShadow geometry={nodes.resume.geometry} material={materials.WRITE} position={[0.666, 0.364, 0.179]} />
      <group name="lamp" position={[0.666, 0.364, 0.179]}>
        <mesh name="lamp_1" castShadow receiveShadow geometry={nodes.lamp_1.geometry} material={materials.black} />
        <mesh name="lamp_2" castShadow receiveShadow geometry={nodes.lamp_2.geometry} material={materials.read} />
      </group>
      <mesh name="pipe5" castShadow receiveShadow geometry={nodes.pipe5.geometry} material={materials.METAL} position={[0.666, 0.364, 0.179]} />
      <mesh name="pipe6" castShadow receiveShadow geometry={nodes.pipe6.geometry} material={materials.METAL} position={[0.666, 0.364, 0.179]} />
      <mesh name="floor" castShadow receiveShadow geometry={nodes.floor.geometry} material={materials.FLOR} />
      <mesh name="cards" castShadow receiveShadow geometry={nodes.cards.geometry} material={materials.FLOR} position={[0.664, 0.364, 0.186]} />
    </group>
  )
}

useGLTF.preload('./models/PortfolioRoom.glb')

