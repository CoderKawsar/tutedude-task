import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="py-6 text-sm mb-8">
      <Link to="/" className="mr-1.5">
        UI/UX
      </Link>
      &gt;
      <Link to="/" className="ml-1.5">
        Refer &amp; Earn
      </Link>
    </div>
  );
}

export default Breadcrumb;
