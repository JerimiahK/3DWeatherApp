import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  CameraControls,
  PerspectiveCamera,
  Text3D,
  Center,
  OrbitControls,
  OrthographicCamera,
  Environment,
  GradientTexture
} from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <color attach="background" args={["#151520"]} />
      {/* <Sky sunPosition={[150, 80, 150]} /> */}
      <CameraControls />
      <OrthographicCamera position={[0, 3, -11]}>
        {/* Weather App Text */}
        <Center rotation={[0.8, 0, 0]} position={[0, 5.5, 0]}>
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
        <Center>
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
        <Center position={[-10, 0, 15]} rotation={[0, 8, 0]}>
          <Text3D letterSpacing={-0.06} size={2} font="/Roboto_Regular.json">
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
