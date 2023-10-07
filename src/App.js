import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber";
import {Box} from "./Box";
import {PerformanceMonitor, Stats} from "@react-three/drei";
import {useState} from "react";

function App() {
    const [dpr, setDpr] = useState(1.5)

    return (
        <div style={{ width: "100vw", height: "100vh" }}>

            <Canvas dpr={dpr}>
                <Stats/>
                <ambientLight/>
                <pointLight position={[0, 20, 10]} intensity={500}/>
                <Box position={[0, 0, 0]}/>
                <Box position={[1, 0, 0]}/>
            </Canvas>
        </div>
    );
}

export default App;
