import React from "react";
// nav
import Nav from "../Nav";

export default function Header() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-between p-1">
        <div class="d-flex align-items-center">
          <img src="/devnetlogo.jpg" alt="logo" class="navbar-brand" />
          <h1 aref="/" class="p-4">DevNet</h1>
        </div>
        <Nav></Nav>
      </header>
    </>
  );
}
