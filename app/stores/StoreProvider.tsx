import { Component, VNode } from 'inferno';
import { Store } from 'reactive-state';

interface StoreProviderProps {
  store: Store<any>;
  children: VNode | null | undefined;
}

/**
 * A simple component that expose the store to its children.
 *
 * @see https://github.com/infernojs/inferno/blob/master/packages/inferno-redux/src/components/Provider.ts
 */
export class StoreProvider extends Component<StoreProviderProps, any> {
  private readonly store: Store<any>;
  constructor(props: StoreProviderProps, context: any) {
    super(props, context);
    this.store = props.store;
  }
  public getChildContext() {
    return { store: this.store, storeSubscription: null };
  }
  public render(props: StoreProviderProps) {
    return props.children;
  }
  public componentWillReceiveProps?(nextProps: Props, nextContext: any): void;
}
