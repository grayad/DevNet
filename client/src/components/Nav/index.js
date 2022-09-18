import React from "react";

const pageNames = ["Jobs", "Developers", "Profile", "Logout"];

function Nav() {
  return (
    <nav>
      <ul className="nav list-unstyled">
        {pageNames.map((name) => {
          return (
            <li className="nav-item">
              <a className={`nav-link ${name}`} href={`#${name.toLowerCase()}`}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
