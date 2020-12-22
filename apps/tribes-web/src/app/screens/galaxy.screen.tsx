import React, { FunctionComponent } from 'react';

interface GalaxyScreenProps {
  seed: string;
}

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
