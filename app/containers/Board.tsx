import React, { Component , FunctionComponent} from 'react';
import { Polygon } from '../components/board/Hexagon';

export interface ViewProps {
  height?: number;
  width?: number;
  id?: string;
}

/**
 *
 */
export const Board: FunctionComponent<ViewProps> = (props: ViewProps) => {
    return (
      <div
        style={{
          height: props.height,
          width: props.width,
        }}>
        <Polygon />
      </div>
    );
  }

