import { Component } from 'inferno';
import { Polygon } from '../components/board/Hexagon';

export interface ViewProps {
  height?: number;
  width?: number;
  id?: string;
}

/**
 *
 */
export default class View extends Component<ViewProps, any> {
  public render(props: ViewProps) {
    this.props = {
      height: window.innerHeight,
      id: 'board',
      width: window.innerWidth,
    };
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
}
