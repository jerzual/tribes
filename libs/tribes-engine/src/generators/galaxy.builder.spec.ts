import GalaxyBuilder from './galaxy.builder';

describe('GalaxyBuilder', () => {
  describe('For the seed "ABCD"', () => {
    let galaxyBuilder: GalaxyBuilder;
    beforeEach(() => {
      galaxyBuilder = new GalaxyBuilder('ABCD');
    });
    it('Test', () => {
      galaxyBuilder.build();
    });
  });
});
