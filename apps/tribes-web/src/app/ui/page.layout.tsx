import React, { FunctionComponent } from 'react';
import "./page.layout.scss"
export const Page: FunctionComponent = (props) => (<main className="page">{props.children}</main>);