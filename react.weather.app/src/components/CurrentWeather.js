import { Text } from "@react-three/drei";
import { useState } from "react";
import skyVideo from "../videos/skyVideo.mov";


export default function GraphDisplay() {

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = skyVideo;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <mesh position={[-9, -1, 5]} rotation={[0, 0.7, 0]} scale={[7, 7, 12]}>
      <circleGeometry />
      <Text scale={0.2} color="black" position={[0, 0.5, 0.01]}>
        Current Weather
      </Text>
      <Text scale={0.15} color="black" position={[0, 0.3, 0.01]}>
        02/04/2023
      </Text>
      <Text scale={0.2} color="black" position={[0.6, 0, 0.01]}>
        Icon
      </Text>
      <Text scale={0.2} color="black" position={[-0.2, 0, 0.01]}>
        Temp: 45
      </Text>
      <Text scale={0.2} color="black" position={[-0.18, -0.3, 0.01]}>
        Wind: 45
      </Text>
      <Text scale={0.2} color="black" position={[-0.17, -0.6, 0.01]}>
        Hum: 45
      </Text>
      <meshBasicMaterial color="aquamarine">
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}
