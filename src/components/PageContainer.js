import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import Scene from "./Scene";

<<<<<<< HEAD
=======
// const renderLoader = () => <p>Loading...</p>

>>>>>>> 65af30fed206db87247d2335e6284c61086e2121
export default function Page() {
  return (
    <>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
<<<<<<< HEAD
      <Loader
        containerStyles={{ background: "lightblue" }}
        innerStyles={{ background: "white", height: "20px" }}
        barStyles={{ background: "hotpink", height: "20px" }}
        dataStyles={{ background: "white", color: "black", fontSize: "80%" }}
      />
=======
      <Loader />
>>>>>>> 65af30fed206db87247d2335e6284c61086e2121
    </>
  );
}
