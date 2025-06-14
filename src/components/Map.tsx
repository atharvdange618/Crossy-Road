import type { Row } from "../types";
import * as THREE from "three";
import { Grass } from "./Grass";
import { Tree } from "./Tree.tsx";

export const metadata: Row[] = [
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: 2, height: 30 },
      { tileIndex: 5, height: 50 },
    ],
  },
];

export const map = new THREE.Group();

export function initializeMap() {
  const grass = Grass(0);
  map.add(grass);
  addRows();
}

export function addRows() {
  metadata.forEach((rowData, index) => {
    const rowIndex = index + 1;

    if (rowData.type === "forest") {
      const row = Grass(rowIndex);

      rowData.trees.forEach(({ tileIndex, height }) => {
        const three = Tree(tileIndex, height);
        row.add(three);
      });

      map.add(row);
    }
  });
}
