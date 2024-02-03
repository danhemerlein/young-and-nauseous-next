import { useRef } from 'react'
import { GradientTexture, GradientType } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Ring = ({ props, wireframe, colors, roughness, metalness }) => {
  const stops = colors.map((color) => color.stop)
  const hexValues = colors.map((color) => color.color)
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 100
    ref.current.rotation.y += delta / 2
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref} scale={0.75}>
      <torusGeometry args={[1.5, 0.4, 48, 100]} />
      <meshStandardMaterial
        wireframe={wireframe}
        roughness={parseFloat(roughness)}
        metalness={parseFloat(metalness)}
      >
        <GradientTexture
          stops={stops}
          colors={hexValues}
          type={GradientType.Radial}
          innerCircleRadius={0}
          outerCircleRadius={'auto'}
          size={1024}
        />
      </meshStandardMaterial>
    </mesh>
  )
}

export default Ring
