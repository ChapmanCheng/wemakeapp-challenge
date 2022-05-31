import type { PropsWithChildren, ReactElement } from "react";
import React from "react";
import Item from "./Item";

type Props = PropsWithChildren<unknown>;

export default function PHGrid({ children }: Props) {
  return (
    <div className="grid gap-4 grid-cols-3 xl:grid-cols-5">{children}</div>
  );
}

PHGrid.Item = Item;
