import { Component } from 'inferno';
import Board from './Board';
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
    return (
      <div className="game screen">
        <Board width={innerWidth} height={innerHeight} />
        <MiniMap />
      </div>
    );
  }
}
