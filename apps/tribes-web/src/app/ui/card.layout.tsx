import React, { FunctionComponent } from 'react';
import "./card.layout.scss"
export const Card: FunctionComponent = (props) => (<div className="card">{props.children}</div>);