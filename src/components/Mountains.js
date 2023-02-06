import Mountains from "../models/cloudy_mountain.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MountainModel() {
  const gltf = useLoader(GLTFLoader, Mountains);
  return <primitive object={gltf.scene} />;
}
