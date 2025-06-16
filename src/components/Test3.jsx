import React from 'react'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei'

const Test3 = () => {
  return (
    <section style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Canvas>
        <mesh>
         <boxGeometry args={[2, 2, 2]} />
    {/* <meshStandardMaterial  color="red"/> */}
    <MeshDistortMaterial color="red" attach="material"/>
    <ambientLight intensity={0.2} /> 
   <directionalLight color="red" position={[1, 2, 0]} />
   <OrbitControls/>
        </mesh>
    </Canvas>
      
    </section>
  )
}

export default Test3
