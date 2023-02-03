import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  PerspectiveCamera,
  Text3D,
  Center,
  OrbitControls,
  OrthographicCamera,
  Environment,
  GradientTexture,
  Stage
} from "@react-three/drei";
import Sun from "./SunModel";

export default function Scene() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <color attach="background" args={["#151520"]} />
      {/* <CameraControls /> */}
      <OrthographicCamera position={[6, 3, -15]} rotation={[0.05, -0.6, 0]}>
        <mesh scale={0.15} position={[-2, 0, 13]}>
          <Sun />
        </mesh>
        {/* Weather App Text */}
        <Center rotation={[0.6, 0, 0]} position={[0, 5.5, 0]}>
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
        <Center position={[0.5, 1, 0]}>
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
        <Center position={[-10, 1, 14.6]} rotation={[0, 8, 0]}>
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
      </OrthographicCamera>
      <OrbitControls makeDefault />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/syferfontein_0d_clear_puresky_1k.hdr"
        ground={{ height: 45, radius: 100, scale: 300 }}
      />
    </Canvas>
  );
}
