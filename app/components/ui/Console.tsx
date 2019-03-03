/**
 * Show text action. reports
 */
import { Component, render, version } from 'inferno';

export default class Console extends Component<any, any> {
  private lines: string[];
  public render() {
    return (
      <div className="console">
        {this.lines.map(line => (
          <div>{line}</div>
        ))}
      </div>
    );
  }
}
