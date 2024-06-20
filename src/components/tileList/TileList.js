import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      <ul>
        {tiles.map(({name, ...rest}) => (
          <Tile name={name} key={name} description={rest} />
        ))}
      </ul>
    </div>
  );
};
