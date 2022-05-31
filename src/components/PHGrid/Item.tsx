import React from "react";

export interface Props {
  img: string;
  name: string;
}

export default function Item({ img, name }: Props) {
  return (
    <div className="rounded-md shadow-md">
      <div className="p-4">
        <div className="flex flex-col flex-nowrap">
          <div className="flex-1">
            <img src={img} alt={name} />
          </div>
          <div>
            <p className="text-lg font-semibold">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
