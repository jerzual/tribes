import { Component } from 'inferno';

interface GalaxyScreenProps {
  seed: string;
}

export class GalaxyScreen extends Component<GalaxyScreenProps, any> {
  public render(props: GalaxyScreenProps) {
    const { seed } = props;
    return (
      <div>
        <h1>Galaxy #{seed}</h1>
      </div>
    );
  }
}
