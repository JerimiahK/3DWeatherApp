import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CameraControls, PerspectiveCamera, Text3D, Center, OrbitControls, OrthographicCamera, Sky } from "@react-three/drei";



export default function Scene() {

  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 10]} />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <CameraControls />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <OrthographicCamera position={[0, 0, -7]}>
        {/* Weather App Text */}
        <Center rotation={[1, 0, 0]} position={[0, 4, 0]}>
          <Text3D
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.001}
            height={0.5}
            lineHeight={0}
            letterSpacing={-0.06}
            size={4.5}
            font="/Roboto_Regular.json"
          >
            Weather?
            <meshBasicMaterial color="#00bfff" />
          </Text3D>
        </Center>
        <Center>
          <Text3D letterSpacing={-0.06} size={2} font="/Roboto_Regular.json">
            Local Forecast
          </Text3D>
        </Center>
        {/* Search Text */}
        <Center position={[-20, 1, 30]} rotation={[0, 8, 0]}>
          <Text3D letterSpacing={-0.06} size={2} font="/Roboto_Regular.json">
            Search
            <meshBasicMaterial color="#ADD8E6" />
          </Text3D>
        </Center>
      </OrthographicCamera>
    </Canvas>
  );
}
