"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 1.glb 
*/

import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/1.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    console.log(actions)
    actions['Armature|mixamo.com|Layer0']?.play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, -1.241]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Boy01_Body_Geo" geometry={nodes.Boy01_Body_Geo.geometry} material={materials.Boy01_Body_MAT1} skeleton={nodes.Boy01_Body_Geo.skeleton} />
          <skinnedMesh name="Boy01_Brows_Geo" geometry={nodes.Boy01_Brows_Geo.geometry} material={materials.Boy01_Brows_MAT2} skeleton={nodes.Boy01_Brows_Geo.skeleton} />
          <skinnedMesh name="Boy01_Eyes_Geo" geometry={nodes.Boy01_Eyes_Geo.geometry} material={materials.Boy01_Eyes_MAT2} skeleton={nodes.Boy01_Eyes_Geo.skeleton} />
          <skinnedMesh name="h_Geo" geometry={nodes.h_Geo.geometry} material={materials.Boy01_Mouth_MAT2} skeleton={nodes.h_Geo.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/1.glb')