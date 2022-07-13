import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="text-white bg-black block p-2 space-x-3 group">
        {/* CSS class property is className in jsx */}
        <Link href="/login">
          <a className="hover:bg-gray-600">Login</a>
        </Link>
        <Link href="/registration">
          <a className="hover:bg-gray-600">Sign Up</a>
        </Link>
        <Link href="/faq">
          <a className="hover:bg-gray-600">FAQ</a>
        </Link>
        <Link href="/main">
          <a className="hover:bg-gray-600">Main</a>
        </Link>
      </div>
    </>
  );
}
