import Link from "next/link";
import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <main className="flex items-center mt-4 space-x-4 justify-center p-2 border-t border-gray-800">
      <div className="text-sm">&copy; Copyright {year}</div>
    </main>
  );
}

export default Footer;
