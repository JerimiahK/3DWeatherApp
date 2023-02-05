import { Text } from "@react-three/drei";
import { useState, useEffect } from "react";
import skyVideo from "../videos/skyVideo.mov";

export default function GraphDisplay({ userSearch }) {
  const key = "a9fab27ee99c4f64b3c174452230502";
  let apiURL = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${userSearch}`;
  const [data, setData] = useState();

  console.log(apiURL + " line 10");

  useEffect(() => {
    async function getData() {
      const currentData = await fetch(apiURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());
      console.log(currentData.current);
      setData(currentData.current);
    }
    getData();
  }, [apiURL]);

  console.log(data);

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
      <Text scale={0.2} color="black" position={[0.6, 0, 0.01]}>

      </Text>
      <Text scale={0.2} color="black" position={[-0.2, 0, 0.01]}>
        Temp: {data ? data.temp_f : ""}°F
      </Text>
      <Text scale={0.2} color="black" position={[-0.18, -0.3, 0.01]}>
        Wind: {data ? data.wind_mph : ""}mph
      </Text>
      <Text scale={0.2} color="black" position={[-0.17, -0.6, 0.01]}>
        Humidity: {data ? data.humidity : ""}%
      </Text>
      <meshBasicMaterial color="aquamarine">
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}
