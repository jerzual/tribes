/**
 * A Chunk is a reduced part of the map displayed on screen.
 */
export default interface ChunkModel {
  planetID?: string;
  leftOffset: number;
  rightOffset: number;
  width: number;
  height: number;
}
