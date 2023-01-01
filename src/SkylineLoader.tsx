/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { CSSProperties, Suspense } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

interface STLoaderProps {
  color: string;
  url: string;
  canvasStyle?: CSSProperties;
  height?: number;
}

export default function SkylineLoader({
  color,
  url,
  canvasStyle = { height: 700 },
  height = 700,
}: STLoaderProps) {
  const geom = useLoader(STLLoader, url);

  return (
    <Canvas
      style={{ ...canvasStyle, height }}
      camera={{
        position: [0, height, 0],
        fov: 10,
      }}
    >
      <pointLight color="white" intensity={1} position={[50, 100, 50]} />
      <Suspense fallback={'loading...'}>
        <mesh geometry={geom} rotation={[Math.PI / -2, 0, 0]}>
          <meshPhongMaterial color={color} />
        </mesh>
      </Suspense>

      <OrbitControls
        enableDamping
        panSpeed={1}
        rotateSpeed={0.6}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 2}
      />
    </Canvas>
  );
}
