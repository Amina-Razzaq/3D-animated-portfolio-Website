import React, { Suspense } from 'react'
import { ComputerModal } from './ComputerModal'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const ComputerModalContainer = () => {
  return (
    <Canvas>
     <Suspense fallback="loading..">
     <Stage environment={'night'} intensity={0.8}>
      <ComputerModal/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
      <PerspectiveCamera position={[-3,0,1.8]} zoom={1.3} makeDefault/>
     </Suspense>   
    </Canvas>
  )
}

export default ComputerModalContainer
