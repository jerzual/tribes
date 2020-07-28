import React, { Component } from 'react';
interface PlanetScreenProps {
  seed: string;
}
export class PlanetScreen extends Component<PlanetScreenProps> {
  public render(props: PlanetScreenProps) {
    const { seed } = props;
    return (
      <div>
        <h1>Planet #{seed}</h1>
      </div>
    );
  }
}

export default PlanetScreen;
