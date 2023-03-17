import React from "react";

function HeaderManagmentList({ href, title, children }) {
  return (
    <li>
      <a
        href={href}
        className="flex gap-2"
      >
        {children}
        <span className="text-gray-600">{title}</span>
      </a>
    </li>
  );
}

export default HeaderManagmentList;
