import * as state from './StateFactory';

export function initialGameState(state, action) {
    return {
        entities: {
            //
            world: {
                defaultTile: {
                    radius: 12,
                    points: 6,
                    center: {x: 0, y: 0},
                    color: [0, 0, 0],

                },
                tiles: [[]]
            },
            games: [
                {
                    name: 'Player 1',
                    units: []
                },
                {
                    name: 'Player 2',
                    units: []
                }
            ],
            unitTypes: {
                FARMER: {},
                FIGHTER: {},
                NPC: {}
            },
            savedGames: [{
                seed: '',
                date: ''
            }],
            options: {
                godMode: false,
                difficulty: 'SOFT'
            }
        },
        ui: {
            chunk: {
                offsetX: 0,
                offsetY: 0,
                scale: 0.75,
                tiles: []
            },
            selectedUnits: [],
            possibleCommands: [{}],
            totalResources: {
                gold: 0,
                wood: 0,
                food: 0
            },
            map: {},
            commands: [
                {
                    action: 'MINIMAP_ZOOM'
                },
                {
                    action: 'SELECT_UNIT'
                },
                {
                    action: 'AFFECT_UNIT',
                }
            ]
        }
    };
}