import App from '../app/App';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow ,render} from 'enzyme';

describe('App component',()=>{

   it('calls componentDidMount', () => {
      const wrapper = mount(<App />);
      expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
   });
   it('should render correct markup',()=>{
      
   });
});
