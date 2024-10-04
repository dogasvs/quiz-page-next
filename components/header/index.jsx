"use client";

import Toggle from "../toogle";

export default function Header() {
  return (
    <div className="header">
      <div className="categories">
        {/* <h2>html</h2> */}
      </div>
      <div className="mod">
        <Toggle />
      </div>
    </div>
  );
}