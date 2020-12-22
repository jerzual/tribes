import React, { FunctionComponent } from 'react';
interface PlanetScreenProps {
  seed?: string;
  children: Element;
}
export const PlanetScreen: FunctionComponent<PlanetScreenProps> = (
  props: PlanetScreenProps,
) => {
  const { seed } = props;
  return (
    <div>
      <h1>Planet #{seed}</h1>
    </div>
  );
};

export default PlanetScreen;
