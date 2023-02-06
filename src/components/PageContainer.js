import React, { Suspense } from "react";
import Scene from "./Scene";

const renderLoader = () => <p>Loading...</p>

export default function Page() {
  return (
    <Suspense fallback={renderLoader()}>
      <Scene />
    </Suspense>
  );
}
