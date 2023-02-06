import Cloud from "../models/cloud_lightning.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function SunModel() {
  const gltf = useLoader(GLTFLoader, Cloud);
  return <primitive object={gltf.scene} />;
}
