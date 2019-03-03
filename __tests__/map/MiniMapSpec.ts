import MiniMap from '../../app/containers/MiniMap';

import { renderToSnapshot } from 'inferno-test-utils';

describe('MiniMap',()=>{

    beforeEach(()=>{

    });
    describe('Snapshot' => {
        it('match', () => {
            const renderedTree = renderToSnapshot(MiniMap);
        })
    });
    it('has a set of tiles',()=>{
        expect();
    });


});