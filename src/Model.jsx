import { useGLTF } from "@react-three/drei";
import React from "react";
export default function Model(props) {
  const { scene } = useGLTF("car.glb");
  return <primitive object={scene} {...props} />;
}
