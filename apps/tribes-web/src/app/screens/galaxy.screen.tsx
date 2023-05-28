import React, { FunctionComponent } from 'react';

type GalaxyScreenProps = {
  seed: string;
  children?: React.ReactNode;
};

export const GalaxyScreen: FunctionComponent<GalaxyScreenProps> = ({
  seed,
  children,
}) => {
  return (
    <div>
      <h1>Galaxy #{seed}</h1>
      {children}
    </div>
  );
};
