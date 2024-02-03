'use client'

import { useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import { UseAuth } from '@/hooks/UseAuth'
import { supabase } from '@/supabaseClient'

import RangeInput from './RangeInput'
import Ring from './Ring'

const RingOutput = () => {
  const { session } = UseAuth()

  const [wireframe, setWireframe] = useState(false)

  const [colors, setColors] = useState([{ color: '#C23B22', stop: 0.0 }])

  const [roughness, setRoughness] = useState(0.5)
  const [metalness, setMetalness] = useState(0.5)
  const [lightIntensity, setLightIntensity] = useState(Math.PI)
  const [dataUrl, setDataUrl] = useState('')

  const toggleWireframe = () => {
    setWireframe(!wireframe)
  }

  const setColor = (e, key) => {
    const newColors = [...colors]
    newColors[key].color = e.target.value
    newColors[key].stop = parseFloat(key / 4)
    setColors(newColors)
  }

  const handleColor = () => {
    if (colors.length < 4) {
      setColors([...colors, { color: '#C23B22', stop: 0.0 }])
    }
  }

  const removeColor = (key) => {
    const newColors = colors.filter((color, index) => index !== key)
    setColors(newColors)
  }

  const Foo = () => {
    const { gl, scene, camera } = useThree()

    gl.render(scene, camera)
    const screenshot = gl.domElement.toDataURL()
    setDataUrl(screenshot)
  }

  const handleSave = () => {
    console.log(session)
    if (!session) return
    const userId = session.user.id
    console.log(userId)
    const { data, error } = supabase.from('rings').insert({
      user_id: userId,
      data_url: dataUrl,
    })

    console.log(data, error)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-between gap-8 font-lack lg:flex-row">
      <Canvas className="h-2xl w-2xl">
        <Foo />
        <ambientLight intensity={lightIntensity / 2} />

        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={lightIntensity}
        />

        <pointLight
          position={[-10, -10, -10]}
          decay={0}
          intensity={lightIntensity}
        />

        <Ring
          position={[-1.2, 0, 0]}
          wireframe={wireframe}
          colors={colors}
          roughness={roughness}
          metalness={metalness}
        />
      </Canvas>
      <div className="lg:max-w[150px] flex w-full flex-col justify-between gap-4 border border-solid border-ink  p-8 lg:w-[25%]">
        <div action="" className="flex flex-col gap-2">
          <RangeInput
            label="metalness"
            min="0"
            max="1"
            value={metalness}
            step="0.01"
            cb={setMetalness}
          />

          <RangeInput
            label="roughness"
            min="0"
            max="1"
            value={roughness}
            step="0.01"
            cb={setRoughness}
          />

          <RangeInput
            label="lightIntensity"
            min="0"
            max="100"
            value={lightIntensity}
            step="1"
            cb={setLightIntensity}
          />

          <div className="grid grid-cols-2">
            {colors.map((color, key) => {
              return (
                <div className="flex flex-col" key={color + key}>
                  <label htmlFor={color + key}>color {key + 1}</label>
                  <input
                    type="color"
                    id={color + key}
                    name={color + key}
                    value={colors[key].color}
                    onChange={(e) => setColor(e, key)}
                  />
                  {key > 0 && (
                    <button
                      type="button"
                      onClick={() => removeColor(key)}
                      className="button h-8 w-8"
                    >
                      &#x2715;
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          {colors.length < 4 && (
            <button type="button" onClick={handleColor} className="button">
              +
            </button>
          )}

          <label htmlFor="wireframe" className="flex items-center">
            <span className="mr-4 block">wireframe</span>

            <input
              type="checkbox"
              name="wireframe"
              id="wireframe"
              onChange={toggleWireframe}
            />
          </label>

          <button className="button" onClick={handleSave}>
            {session ? 'save' : 'login to save'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RingOutput
