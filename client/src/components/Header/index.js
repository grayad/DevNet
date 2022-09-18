import React from "react";

// nav
import Nav from "../Nav";

export default function Header() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-between p-1">
        <h1 aref="/">DevNet</h1>
        <Nav></Nav>
      </header>
    </>
  );
}
