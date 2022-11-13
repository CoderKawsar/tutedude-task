import React from "react";
import Guideline from "./Guideline";

function Guidelines() {
  return (
    <div className="mt-24 mb-16">
      <h3 className="font-semibold text-2xl text-primary mb-5">
        How does it work?
      </h3>
      <div className="grid grid-cols-2 gap-8">
        <Guideline />
        <Guideline />
        <Guideline />
        <Guideline />
        <Guideline />
      </div>
    </div>
  );
}

export default Guidelines;
