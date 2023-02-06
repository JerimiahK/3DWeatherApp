import Moon from "../models/moon2.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MoonModel() {
  const gltf = useLoader(GLTFLoader, Moon);
  return <primitive object={gltf.scene} />;
}
