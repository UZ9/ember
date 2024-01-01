import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas, extend, ThreeElements, useFrame, Vector3 } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls, Plane, Sky, Stats } from "@react-three/drei";
// @ts-ignore
import { N8AO } from "@react-three/postprocessing";

extend({ N8AO })

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

    console.log("Setting...");

    return (
        <div className={"canvas-wrapper"}>
            <Canvas shadows={true}>
                <fog attach="fog" args={['white', 0, 300]} />
                <Stats />
                <Sky rayleigh={20} sunPosition={[100, 10, 100]} />
                <OrbitControls />
                <ambientLight intensity={0.1} />
                <directionalLight shadow-mapSize={[1024, 1024]} castShadow={true} intensity={1} position={[10, 10, 10]} />

                {/*<TerrainModel/>*/}

                <Plane rotation={[-Math.PI / 2, 0, 0]}/>


                <Environment resolution={512}>
                    {/* Ceiling */}
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                    {/* Sides */}
                    <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                    <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                    {/* Key */}
                    <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
                </Environment>

                {/*<EffectComposer>*/}
                {/*    /!*<Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />*!/*/}
                {/*    <N8AO/>*/}
                {/*</EffectComposer>*/}
            </Canvas>
        </div>
    );
}

export default App;
