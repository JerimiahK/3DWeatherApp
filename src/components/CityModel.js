import City from "../models/tokyo_night.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function CityModel() {
  const gltf = useLoader(GLTFLoader, City);
  return <primitive object={gltf.scene} />;
}
