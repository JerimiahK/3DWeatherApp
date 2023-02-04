import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Sun from "./SunModel";
import Cloud from "./StormCloud";
import Search from "./SearchText";
import AppText from "./AppText";

export default function Scene() {
  return (
    <Canvas
      camera={{ fov: "100", position: [2, -4, 25] }}
      style={{ width: "100%", height: "100vh" }}
    >
      <color attach="background" args={["#151520"]} />
      {/* Sun Model */}
      <mesh scale={0.7} position={[-1, 22, 0]}>
        <Sun />
      </mesh>
      {/* Storm Cloud Model */}

      <mesh scale={2.5} position={[-12, 12, 3]}>
        <Cloud />
      </mesh>

      {/* Weather App Text */}
      <AppText />

      {/* Search Text */}
      <Search />

      <OrbitControls makeDefault />

      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/syferfontein_0d_clear_puresky_1k.hdr"
        ground={{ height: 45, radius: 100, scale: 300 }}
      />
    </Canvas>
  );
}
