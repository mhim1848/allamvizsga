import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        {/* CSS class property is className in jsx */}
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Home</a>
        </Link>
        <Link href="/registration">
          <a className="btn btn-ghost normal-case text-xl">Sign Up</a>
        </Link>
        <Link href="/faq">
          <a className="btn btn-ghost normal-case text-xl">FAQ</a>
        </Link>
        <Link href="/main">
          <a className="btn btn-ghost normal-case text-xl">Main</a>
        </Link>
      </div>
    </>
  );
}
