import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import Scene from "./Scene";

// const renderLoader = () => <p>Loading...</p>

export default function Page() {
  return (
    <>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Loader />
    </>
  );
}
