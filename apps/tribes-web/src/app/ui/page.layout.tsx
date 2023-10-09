import React, { FunctionComponent } from 'react';
import './page.layout.scss';
export type PageProps = {
  children?: React.ReactNode;
  id?: any;
};
export const Page: FunctionComponent = (props: PageProps) => (
  <main className="page">{props.children}</main>
);
