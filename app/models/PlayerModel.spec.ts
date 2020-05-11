import { PlayerModel } from './PlayerModel';

describe('has a facebookId ', () => {
  let player;
  beforeEach(() => {
    player = new PlayerModel();
  });
  it('can be constructed', () => {
    expect(player).toBeDefined();
  });
  it('has a facebookId ', () => {});
});
