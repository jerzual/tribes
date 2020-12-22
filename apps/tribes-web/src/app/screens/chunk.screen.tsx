import React, { FunctionComponent } from 'react';
export interface ChunkProps {
  id?: string;
  leftOffset?: number;
  topOffset?: number;
}
export const ChunkScreen: FunctionComponent<ChunkProps> = (
  props: ChunkProps,
) => {
  const { id } = props;
  return (
    <div>
      <h1>Chunk #{id}</h1>
    </div>
  );
};
