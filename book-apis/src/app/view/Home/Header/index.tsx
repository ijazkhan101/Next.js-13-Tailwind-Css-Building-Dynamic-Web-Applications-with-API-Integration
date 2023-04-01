import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-white py-2 px-4 border-b border-b[#000000]">
      <Link href="/">Book API</Link>
      <Link
        href="register"
        className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Register
      </Link>
    </header>
  );
}
