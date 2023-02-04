import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Sun from "./SunModel";
import Cloud from "./StormCloud";
import Graph from "./GraphDisplay";
import AppText from "./AppText";

export default function Scene() {
  return (
    <Canvas
      camera={{ fov: "105", position: [0, 0, 25] }}
      style={{ width: "100%", height: "100vh", zIndex: "1" }}
    >
      <color attach="background" args={["#151520"]} />
      {/* Sun Model */}
      <mesh scale={0.6} position={[0, 22, 0]}>
        <Sun />
      </mesh>
      {/* Storm Cloud Model */}

      <mesh scale={2.5} position={[-11, 12, 2]}>
        <Cloud />
      </mesh>

      {/* Weather App Text */}
      <AppText />

      {/* Graph Screen */}
        <Graph />

      <OrbitControls makeDefault enableDamping />

      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/syferfontein_0d_clear_puresky_1k.hdr"
        ground={{ height: 45, radius: 100, scale: 300 }}
      />
    </Canvas>
  );
}
