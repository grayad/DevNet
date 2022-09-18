import React from "react";
// nav
import Nav from "../Nav";

export default function Header() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-between p-1">
        <div className="d-flex align-items-center">
          <img src="/devnetlogo.jpg" alt="logo" className="navbar-brand" />
          <h1 aref="/" className="p-4">DevNet</h1>
        </div>
        <Nav></Nav>
      </header>
    </>
  );
}
