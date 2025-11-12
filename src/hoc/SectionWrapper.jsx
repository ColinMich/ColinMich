import React from "react";

export const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="relative z-0">
        <Component />
      </section>
    );
  };
