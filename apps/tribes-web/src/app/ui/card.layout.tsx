import React, { FunctionComponent } from 'react';
import './card.layout.scss';
export type CardProps = {
  children?: React.ReactNode;
};
export const Card: FunctionComponent = (props: CardProps) => (
  <div className="card">{props.children}</div>
);
