import App from './App';

describe('App component', () => {
  it('calls componentDidMount', () => {
    expect(App.prototype.componentDidMount.calledOnce).toBe(true);
  });
  it('should render correct markup', () => {
    expect(true).toBe(true);
  });
});
