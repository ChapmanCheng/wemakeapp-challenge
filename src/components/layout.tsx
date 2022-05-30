import React from "react";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="container mx-4 md:mx-auto xl:mx-8">
      <div className="flex flex-col flex-nowrap">
        <section className="flex-none">
          <Title />
        </section>
        <section className="flex-1">{children}</section>
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
