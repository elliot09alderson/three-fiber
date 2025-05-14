import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import { Environment, OrbitControls, Stage } from "@react-three/drei";

const Expirence = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <Canvas>
          <Environment preset="city" />
          <OrbitControls />
          <Stage>
            <Model scale={0.5} />
          </Stage>
        </Canvas>
      </div>
    </>
  );
};

export default Expirence;
