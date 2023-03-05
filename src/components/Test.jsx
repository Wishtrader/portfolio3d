import React from 'react';
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, RenderTexture} from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`

const Test = () => {
  return (
    <Section>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3,2,1]} />
        <mesh>
          <boxGeometry args={[1,1,1]} />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <color attach="background" args={["pink"]} />
             
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Section>
  );
};

export default Test;
