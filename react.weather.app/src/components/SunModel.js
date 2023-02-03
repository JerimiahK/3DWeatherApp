import Sun from "../models/sun.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function SunModel() {

    // const { scene, animations } = useGLTF(url);
    // const { actions } = useAnimations(animations, scene);

  const gltf = useLoader(GLTFLoader, Sun);
  return <primitive object={gltf.scene}/>;
}
