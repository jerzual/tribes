import React, { FunctionComponent } from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from "./box.mesh";
export interface BoardProps{
    width?: number;
    height?: number;
}
export const Board: FunctionComponent<BoardProps> = (props?: BoardProps) => (<div className="box"><Canvas>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas></div>);