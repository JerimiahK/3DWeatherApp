import { Text } from "@react-three/drei";
import { useState, useEffect } from "react";
import skyVideo from "../videos/skyVideo.mov";

export default function GraphDisplay({ userSearch }) {
  const key = "a9fab27ee99c4f64b3c174452230502";
  const apiURL = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${userSearch}`;
  const [url, setUrl] = useState(apiURL);
  const [data, setData] = useState(); 

  console.log(url);

  useEffect(() => {
    async function getData() {
      const currentData = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());
      console.log(currentData);
      setData(currentData)
      setUrl(url)
    }
    getData();
  }, [url]);

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
      <Text scale={0.15} color="black" position={[0, 0.3, 0.01]}></Text>
      <Text scale={0.2} color="black" position={[0.6, 0, 0.01]}></Text>
      <Text scale={0.2} color="black" position={[-0.2, 0, 0.01]}>
        Temp: °F
      </Text>
      <Text scale={0.2} color="black" position={[-0.18, -0.3, 0.01]}>
        Wind: mph
      </Text>
      <Text scale={0.2} color="black" position={[-0.17, -0.6, 0.01]}>
        Humidity: %
      </Text>
      <meshBasicMaterial color="aquamarine">
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}
