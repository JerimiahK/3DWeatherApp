import React, { useState, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Loader } from "@react-three/drei";
import { Html } from "@react-three/drei";
// Model Imports
import Moon from "./MoonModel";
import City from "./CityModel";
import Mountain from "./Mountains";
import Cloud from "./StormCloud";
// import CurrentWeather from "./CurrentWeather";
import AppText from "./AppText";
import Sky from "../assets/sky.hdr";
const CurrentWeather = lazy(() => import("./CurrentWeather"));

export default function Scene() {
  const [userSearch, setUserSearch] = useState("");

  const handleChange = (event) => {
    const userInput = event.target.value;
    setUserSearch(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return setUserSearch(userSearch);
  };

  return (
      <Canvas
        camera={{ fov: "105", position: [0, 0, 27] }}
        style={{ width: "100%", height: "100vh", zIndex: "1" }}
      >
        <color attach="background" args={["lightblue"]} />

        {/* Search Bar */}
        <mesh position={[0, 32.7, 0]}>
          <Html center wrapperClass="searchBar">
            <form onSubmit={handleSubmit} className="searchBar">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-black sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute bg-blue-900 inset-y-0 left-0 flex items-center pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-5 bg-blue-900  text-black dark:text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={handleChange}
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search City"
                  required
                />
              </div>
            </form>
          </Html>
        </mesh>

        {/* Moon Model */}
        <mesh scale={5} position={[0, 15, 0]}>
          <Moon />
        </mesh>

        {/* City Model */}
        <mesh scale={1} rotation={[0, 0, 0]} position={[0, -50, -25]}>
          <City />
        </mesh>

        {/* Mountain Model */}
        <mesh scale={2} rotation={[0.4, 0, 0]} position={[-230, -15, -130]}>
          <Mountain />
        </mesh>

        {/* Storm Cloud Model */}
        <mesh scale={2.5} position={[-11, 12, 0]}>
          <Cloud />
        </mesh>

        {/* Weather App Text */}
        <AppText />

        {/* Current Weather */}
        <CurrentWeather userSearch={userSearch} />

        <OrbitControls makeDefault enableDamping />

        <Environment
          files={Sky}
          ground={{ height: 45, radius: 100, scale: 300 }}
        />
      </Canvas>
  );
}
