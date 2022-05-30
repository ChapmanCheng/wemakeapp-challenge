import React from "react";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="container mx-auto xl:mx-8">
      <div className="flex flex-col flex-nowrap">
        <div className="flex-none">
          <Title />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
function Title() {
  return (
    <div className="mt-4 mb-8">
      <h1 className="text-2xl font-bold text-center">Product Hunt</h1>
    </div>
  );
}
