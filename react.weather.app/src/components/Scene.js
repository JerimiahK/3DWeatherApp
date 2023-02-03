import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Text3D,
  Center,
  OrbitControls,
  Environment,
  GradientTexture,
} from "@react-three/drei";
import Sun from "./SunModel";
import Moon from "./MoonModel";
import Cloud from "./StormCloud";

export default function Scene() {
  return (
    <Canvas
      camera={{ fov: "110", position: [2, -4, 20] }}
      style={{ width: "100%", height: "100vh" }}
    >
      <color attach="background" args={["#151520"]} />
      <mesh scale={0.7} position={[-1, 22, 0]}>
        <Sun />
      </mesh>
      <mesh scale={2.5} position={[-12, 15, 0]}>
        <Cloud />
      </mesh>
      {/* <mesh scale={3} position={[-1, -20, 0]}>
        <Moon />
      </mesh> */}
      {/* Weather App Text */}
      <Center rotation={[0.6, 0, 0]} position={[5, 4, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.01}
          height={1}
          lineHeight={0}
          letterSpacing={-0.06}
          size={3.5}
          font="/Roboto_Regular.json"
        >
          WEATHER
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]}
              colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
            />
          </meshBasicMaterial>
        </Text3D>
      </Center>
      {/* Local Forecast Text */}
      <Center position={[5.2, 0, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.01}
          height={0.6}
          lineHeight={0}
          letterSpacing={-0.06}
          size={2.2}
          font="/Roboto_Regular.json"
        >
          Local Forecast
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]}
              colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
            />
          </meshBasicMaterial>
        </Text3D>
      </Center>
      {/* Search Text */}
      <Center position={[-8.5, 3, 5]} rotation={[0.2, 1, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.01}
          height={0.4}
          lineHeight={0}
          letterSpacing={-0.06}
          size={2}
          font="/Roboto_Regular.json"
        >
          Search
          <meshBasicMaterial color="#ADD8E6" />
        </Text3D>
      </Center>
      <OrbitControls makeDefault />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/syferfontein_0d_clear_puresky_1k.hdr"
        ground={{ height: 45, radius: 100, scale: 300 }}
      />
    </Canvas>
  );
}
