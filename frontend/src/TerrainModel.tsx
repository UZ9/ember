import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import { BufferAttribute, Color, DoubleSide, PlaneGeometry } from "three";
import { useControls } from "leva";
import { createNoise2D } from "simplex-noise";
import alea from "alea";
import { PivotControls } from "@react-three/drei";

const prng = alea('seed');
const noise = createNoise2D(prng);


export default function TerrainModel() {
    const options = useMemo(() => {
        return {
            wireframe: false,
            subdivisions: { value: 20, min: 2, max: 300, step: 1 },
            size: { value: 40, min: 2, max: 50, step: 1 },
            frequency: { value: 1, min: 0.01, max: 2, step: 0.01 },
            persistence: { value: 1, min: 0.01, max: 2, step: 0.01 },
            lacunarity: { value: 1, min: 0.01, max: 2, step: 0.01 },
            dampening: { value: 1, min: 0.01, max: 2, step: 0.01 },
            scale: { value: 1, min: 0.01, max: 50, step: 0.01 },
            heightScale: { value: 4.0, min: 1, max: 100, step: 0.1 },
            octaves: { value: 2, min: 1, max: 10, step: 1 },
        }
    }, []);

    let { frequency, wireframe, subdivisions, heightScale, scale, size, octaves, persistence, lacunarity, dampening} = useControls(options);

    const planeGeometryRef = useRef<PlaneGeometry | null>(null);

    const getNoise = (x: number, y: number) => {
        let tempAmplitude = 1.0;
        let tempFrequency = frequency;
        let noiseHeight = 0.0;

        for (let i = 0; i < octaves; i++) {
            let xVal = x / scale * tempFrequency;
            let yVal = y / scale * tempFrequency;

            let noiseVal = noise(xVal, yVal) * 2 - 1;

            noiseVal *= dampening;

            noiseHeight += noiseVal * tempAmplitude;

            tempAmplitude *= persistence;
            tempFrequency *= lacunarity;
        }

        return noiseHeight < 0 ? noiseHeight * heightScale/10 : noiseHeight * heightScale;
    }

    const xSegments = 50;
    const ySegments = 50;

    useEffect(() => {




        console.log("Attempting to render")
        console.log(planeGeometryRef)
        if (planeGeometryRef.current) {

            console.log("Cool");
            const points = planeGeometryRef.current?.getAttribute("position").array
            console.log("I found it");//
            if (points) {

                let newPoints = []
                let newColors = []
                let newNormals = []
                let indices = []
                let newUvs = []

                let k = 0;

                let x = 0, y = 0, z = 0;


                for (let x = 0; x < xSegments; x++) {
                    for (let y = 0; y < ySegments; y++) {
                        let noiseResult = (1 + getNoise(x, y));

                        // console.log({x, y});

                        newPoints.push(x, y, noiseResult);

                        let color = new Color(x / xSegments, y / ySegments, 0.0);

                        newNormals.push(0, 0, 1)


                        if (k % 3 === 0) {
                            newColors.push(1.0, color.g, color.b)
                            newColors.push(1.0, color.g, color.b)
                            newColors.push(1.0, color.g, color.b)

                        }


                        k++;

                    }
                }

                let i = 0;

                for (let yi = 0; yi < xSegments - 1; yi++) {
                    for (let xi = 0; xi < ySegments - 1; xi++) {
                        indices.push(i, i + 1, i + ySegments + 1)
                        indices.push(i + ySegments + 1, i + ySegments, i)
                        i++
                    }
                    i++
                }

                // for (let i = 0; i < points.length; i += 3) {





                    // let
                    // newColors.push(0x00FFFF);
                    // newColors.push(0x00FF00);



                // }


                planeGeometryRef.current?.setAttribute('position', new BufferAttribute(new Float32Array(newPoints), 3));
                planeGeometryRef.current?.setAttribute('normal', new BufferAttribute(new Int16Array(newNormals), 3));
                // planeGeometryRef.current?.setAttribute('uv', new BufferAttribute(new Float32Array(newUvs), 2));
                // planeGeometryRef.current?.setAttribute('position', new BufferAttribute(new Float32Array(newPoints), 3));
                // planeGeometryRef.current?.computeVertexNormals();


                planeGeometryRef.current?.setAttribute('color', new BufferAttribute(new Float32Array(newColors), 3));
                planeGeometryRef.current?.setIndex( new BufferAttribute(new Uint16Array(indices), 1));



                // planeGeometryRef.current.getAttribute('color').needsUpdate = true;

            }
        }
    }, [planeGeometryRef, frequency, scale, heightScale, size, subdivisions, octaves, lacunarity, persistence, dampening]);

    return (
        <mesh receiveShadow={true} position={[-xSegments / 2, -5, ySegments / 2]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry ref={planeGeometryRef} args={[ size, size, subdivisions, subdivisions ]} />
            <meshStandardMaterial side={DoubleSide} vertexColors={true} flatShading={true} wireframe={wireframe}/>
        </mesh>
    )
}