import { Center, Text3D, GradientTexture } from "@react-three/drei";

export default function AppText() {
  return (
    <mesh>
      <Center rotation={[0.6, 0, 0]} position={[5, 9, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.01}
          height={1}
          lineHeight={0}
          letterSpacing={-0.06}
          size={5}
          font="/Roboto_Regular.json"
        >
          WEATHER
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]}
<<<<<<< HEAD
              colors={["#58cff7", "#fb49a2"]} // Colors need to match the number of stops
=======
              colors={["#00A0CE", "white"]} // Colors need to match the number of stops
>>>>>>> 65af30fed206db87247d2335e6284c61086e2121
            />
          </meshBasicMaterial>
        </Text3D>
      </Center>
      {/* Local Forecast Text */}
      <Center position={[7, 5, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.01}
          height={0.6}
          lineHeight={0}
          letterSpacing={-0.06}
          size={2.7}
          font="/Roboto_Regular.json"
        >
          Local Forecast
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]}
<<<<<<< HEAD
              colors={["#58cff7", "#fb49a2"]} // Colors need to match the number of stops
=======
              colors={["#00A0CE", "white"]} // Colors need to match the number of stops
>>>>>>> 65af30fed206db87247d2335e6284c61086e2121
            />
          </meshBasicMaterial>
        </Text3D>
      </Center>
    </mesh>
  );
}
