export interface GameState {
  status: 'paused' | 'running';
  entities: { [id: string]: EntityState };
  ui: UIState;
  world?: any;
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

export function initialGameState(): GameState {
  return {
    status: 'running',
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
      tiles: [[]],
    },
    options: {
      godMode: false,
      difficulty: 'SOFT',
    },
    ui: {
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
