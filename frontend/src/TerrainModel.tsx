import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function TerrainModel() {
    const gltf = useLoader(GLTFLoader, '/terrain_low_poly.glb')
    return <primitive object={gltf.scene} />
}