import React, { FunctionComponent, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

export const Tile: FunctionComponent<{ position: number[] }> = (props) => {
  // This reference will give us direct access to the mesh
  const mesh: React.MutableRefObject<Mesh> = useRef();

  // Set up state for the hovered and active state
  const [isHovered, setHover] = useState(false);
  const [isActive, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      position={new Vector3(...props.position)}
      ref={mesh}
      scale={isActive ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!isActive)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={isHovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
};
export default Tile;
