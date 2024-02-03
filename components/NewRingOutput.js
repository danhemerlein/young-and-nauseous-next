'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Ring = ({ props, wireframe }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref} scale={0.75}>
      <torusGeometry args={[1.5, 0.4, 48, 100]} />
      <meshStandardMaterial color={'#C23B22'} wireframe={wireframe} />
    </mesh>
  )
}

const NewRingOutput = () => {
  const [wireframe, setWireframe] = useState(false)

  const toggleWireframe = () => {
    setWireframe(!wireframe)
  }

  return (
    <div className="flex h-screen items-center justify-between gap-8 font-lack">
      <Canvas className="h-2xl w-2xl">
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Ring position={[-1.2, 0, 0]} wireframe={wireframe} />
      </Canvas>
      <div className="flex h-[50%] w-[25%] flex-col justify-between border border-solid border-ink p-8">
        <h2 className="">create a mood ring</h2>

        <form action="">
          <label htmlFor="wireframe">wireframe</label>
          <input
            type="checkbox"
            name="wireframe"
            id="wireframe"
            onChange={toggleWireframe}
          />

          <button type="submit" className="button">
            save
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewRingOutput
