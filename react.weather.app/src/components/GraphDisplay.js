import { Text3D, Center, Text } from "@react-three/drei";
import { useRef, useState } from "react";

export default function GraphDisplay() {
  const ref = useRef();
  const [clicked, showSearch] = useState(false);
  const [hovered, hover] = useState(false);

  const searchBar = () => {
    showSearch(true);
  };

  return (
    <mesh position={[-11, 0, 5]} rotation={[0, 0.5, 0]} scale={[10.5, 10, 2]}>
      {/* <Center position={[-8.5, 3, 5]} rotation={[0, 1, 0]}>
        <Text3D
          onClick={searchBar}
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
          Click To
          <meshBasicMaterial color={hovered ? "#add8e65d" : "#ADD8E6"} />
        </Text3D>
      </Center>
      <Center position={[-8.5, 0, 5]} rotation={[0, 1, 0]}>
        <Text3D
          onClick={searchBar}
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
      </Center> */}
      <boxGeometry />
      <Text
        scale={0.1}
        color="black"
        position={[0, 0.4, 0.55]}
      >
        Current Weather
      </Text>
      <meshBasicMaterial color="white" />
    </mesh>
  );
}
