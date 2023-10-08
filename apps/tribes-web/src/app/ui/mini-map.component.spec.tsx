import MiniMap from './mini-map.component';

describe('MiniMap', () => {
  let minimap: MiniMap;
  beforeEach(() => {
    minimap = new MiniMap({});
  });
  describe('Snapshot', () => {
    it('match', () => {
      expect(minimap).toBeDefined();
    });
  });
});
