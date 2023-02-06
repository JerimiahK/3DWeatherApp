import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import Scene from "./Scene";

export default function Page() {
  return (
    <>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Loader
        containerStyles={{ background: "lightblue" }}
        innerStyles={{ background: "white", height: "20px" }}
        barStyles={{ background: "hotpink", height: "20px" }}
        dataStyles={{ background: "white", color: "black", fontSize: "80%" }}
      />
    </>
  );
}
