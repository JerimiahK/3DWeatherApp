import { Text3D, Center, Text } from "@react-three/drei";
import { useRef, useState } from "react";

export default function GraphDisplay() {
  

  return (
    <mesh position={[-11, 0, 5]} rotation={[0, 0.5, 0]} scale={[10.5, 15, 2]}>
      <boxGeometry />
      <Text scale={0.1} color="black" position={[0, 0.4, 0.55]}>
        Current Weather
      </Text>
      <Text scale={0.1} color="black" position={[0, 0.3, 0.55]}>
        02/04/2023
      </Text>
      <Text scale={0.1} color="black" position={[0, 0.17, 0.55]}>
        Icon
      </Text>
      <Text scale={0.1} color="black" position={[-0.2, 0, 0.55]}>
        Temp: 45
      </Text>
      <Text scale={0.1} color="black" position={[-0.18, -0.2, 0.55]}>
        Wind: 45
      </Text>
      <Text scale={0.1} color="black" position={[-0.17, -0.4, 0.55]}>
        Hum: 45
      </Text>
      <meshBasicMaterial color="white" />
    </mesh>
  );
}
