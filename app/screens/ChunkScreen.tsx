import React, { Component } from 'react';

export class ChunkScreen extends Component {
  public render(props) {
    const { seed } = props;
    return (
      <div>
        <h1>Chunk #{seed}</h1>
      </div>
    );
  }
}
