import { Center, Text3D, GradientTexture } from "@react-three/drei";

export default function AppText() {
  return (
    <mesh>
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
    </mesh>
  );
}
