import {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";

export const Box = (props) => {
    const meshRef = useRef();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state, delta) => (meshRef.current.rotation.x += delta))

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={( event ) => setHover(true)}
            onPointerOut={( event ) => setHover(false)}
        >
            <boxGeometry attach="geometry" args={[1, 1, 1]}/>
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>
    )
}
