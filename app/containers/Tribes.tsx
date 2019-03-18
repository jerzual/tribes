import { Component } from 'inferno';
import Board from './Board';
import View from './Board';
import MiniMap from './MiniMap';

interface TribesState {
  width: number;
  height: number;
}
/**
 * Container for a launched game.
 */
export default class Tribes extends Component<any, TribesState> {
  public render() {
    const { innerWidth, innerHeight } = window;
    return (
      <div className="game screen">
        <View width={innerWidth} height={innerHeight} />
        <MiniMap />
      </div>
    );
  }
}
