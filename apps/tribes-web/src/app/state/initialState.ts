export interface GameState {
  status: 'paused' | 'running';
  entities: { [id: string]: EntityState };
  interface: UIState;
  world?: any;
  player: PlayerState,
  options?: any;
}
export interface EntityState {
  behaviors?: string[];
  attributes?: any;
}
export interface UIState {
  loading?: boolean;
  selectedUnits?: any[];
  widgets: { [widgetName: string]: boolean };
}

export interface PlayerState{
  status: 'unknown' | 'pending' | 'error' | 'loaded',
  uuid?: string;
}

export function initialGameState(): GameState {
  return {
    status: 'running',
    player: {status: 'unknown'},
    entities: {},
    //
    world: {
      defaultTile: {
        radius: 12,
        column: 6,
        row: 0,
        center: { x: 0, y: 0, z: 0 },
        color: [0, 0, 0],
        units: [],
        buildings: [],
      },
      tiles: [],
    },
    options: {
      godMode: false,
      difficulty: 'SOFT',
    },
    interface: {
      loading: false,
      widgets: {
        position: false,
        minimap: false,
        selector: false,
        loreDetails: false,
      },
      selectedUnits: [],
    },
  };
}
