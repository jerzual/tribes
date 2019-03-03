import { Component } from 'inferno';
interface PlanetScreenProps {
  seed: string;
}
export class PlanetScreen extends Component<PlanetScreenProps, any> {
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
