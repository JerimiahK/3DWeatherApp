import { Text3D, Center } from "@react-three/drei";
import { useRef, useState } from "react";

export default function Search () {

    const [clicked, click] = useState();

    const searchBar = () => {
        
    }

    return (
      <mesh>
        <Center position={[-8.5, 2, 5]} rotation={[0.2, 1, 0]}>
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
            <meshBasicMaterial color="#ADD8E6" />
          </Text3D>
        </Center>
        <Center position={[-8.5, -1, 5]} rotation={[0.2, 1, 0]}>
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
        </Center>
      </mesh>
    );
}