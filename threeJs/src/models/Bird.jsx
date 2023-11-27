import React from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei'
const Bird = () => {
    const {scene,animations} = useGLTF(birdScene)
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
    // use the primitive element when you want to directly embed a complex 3D
    model or scene
    <primitive object={scene} />
  </mesh>
  )
}

export default Bird