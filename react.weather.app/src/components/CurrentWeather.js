import { Text } from "@react-three/drei";
import { useState } from "react";
import skyVideo from "../videos/skyVideo.mov";

export default function GraphDisplay({ icon, date, temp, wind, humidity }) {
  // let userSearch = citySearch.val();
  let key = "0faaa42019c798356adf79d4415bbb25";
  // let cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&appid=${key}`;

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
        {date}
      </Text>
      <Text scale={0.2} color="black" position={[0.6, 0, 0.01]}>
        {icon}
      </Text>
      <Text scale={0.2} color="black" position={[-0.2, 0, 0.01]}>
        Temp: {temp}°F
      </Text>
      <Text scale={0.2} color="black" position={[-0.18, -0.3, 0.01]}>
        Wind: {wind}mph
      </Text>
      <Text scale={0.2} color="black" position={[-0.17, -0.6, 0.01]}>
        Humidity: {humidity}%
      </Text>
      <meshBasicMaterial color="aquamarine">
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}
