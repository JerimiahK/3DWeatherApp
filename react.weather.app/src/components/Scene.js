import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Moon from "./MoonModel";
import City from "./CityModel";
import Mountain from "./Mountains";
import Cloud from "./StormCloud";
import Graph from "./GraphDisplay";
import AppText from "./AppText";
import Sky from "../assets/sky2.hdr"

export default function Scene() {
  return (
    <Canvas
      camera={{ fov: "105", position: [0, 0, 27] }}
      style={{ width: "100%", height: "100vh", zIndex: "1" }}
    >
      <color attach="background" args={["lightblue"]} />

      {/* Moon Model */}
      <mesh scale={5} position={[0, 15, 0]}>
        <Moon />
      </mesh>

      {/* City Model */}
      <mesh scale={1} rotation={[0, 0, 0]} position={[0, -50, -25]}>
        <City />
      </mesh>

      {/* Mountain Model */}
      <mesh scale={2} rotation={[0.4, 0, 0]} position={[-230, -15, -130]}>
        <Mountain />
      </mesh>

      {/* Storm Cloud Model */}
      <mesh scale={2.5} position={[-11, 12, 0]}>
        <Cloud />
      </mesh>

      {/* Weather App Text */}
      <AppText />

      {/* Graph Screen */}
      <Graph />

      <OrbitControls makeDefault enableDamping />

      <Environment
        files={Sky}
        ground={{ height: 45, radius: 100, scale: 300 }}
      />
    </Canvas>
  );
}
