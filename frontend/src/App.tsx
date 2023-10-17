import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas, ThreeElements, useFrame, Vector3 } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";


function Box(props: ThreeElements["mesh"]) {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((state, delta) => (ref.current.rotation.x += delta));
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    );
}

type BoxInput = {
    boxCoords: Vector3[]
}

function App() {

    const [boxCoords, setBoxCoords] = useState<Vector3[]>([]);

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:4000");

        socket.onmessage = (event) => {
            let data: BoxInput = JSON.parse(event.data);

            console.log(`RECEIVED: ${data}`);

            setBoxCoords(data.boxCoords);

        };
    }, []);

    return (
        <div className={"canvas-wrapper"}>
            <Canvas>
                <Stats />
                <OrbitControls />
                <ambientLight />
                <pointLight intensity={1000} position={[10, 10, 10]} />

                {
                    boxCoords && boxCoords.map(coords => {
                        return (
                            <Box position={coords}/>
                        )
                    })
                }

            </Canvas>
        </div>
    );
}

export default App;
