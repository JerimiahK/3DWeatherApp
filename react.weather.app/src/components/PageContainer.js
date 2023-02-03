import SearchBar from "./SearchBar"
import Scene from "./Scene"
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function Page() {
  return (
    <div>
      <Scene />
      <SearchBar />
    </div>
  );
}
