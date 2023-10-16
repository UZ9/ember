import React, { useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { OrbitControls, Stats } from "@react-three/drei";

function Box(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function App() {
  return (
      <div className={"canvas-wrapper"}>
          <Canvas>
              <Stats/>
              <OrbitControls/>
              <ambientLight />
              <pointLight intensity={1000} position={[10, 10, 10]} />
              <Box position={[-1.2, 0, 0]} />
              <Box position={[1.2, 0, 0]} />
          </Canvas>
      </div>
  );
}

export default App;
