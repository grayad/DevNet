import React from "react";

const determineActiveClass = (currentPage, pageName) =>
  `nav-link ${currentPage === pageName ? "active" : ""}`;

const pageNames = ["Jobs", "Developers", "Profile", "Logout"];

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul className="nav list-unstyled">
        {pageNames.map((name) => {
          return (
            <li className="nav-item">
              <a
                className={determineActiveClass(currentPage, name)}
                href={`#${name.toLowerCase()}`}
                onClick={() => handlePageChange(name)}
              >
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
