import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="text-white bg-black block p-2 space-x-3 group">
        {/* CSS class property is className in jsx */}
        <span>Navbar</span>

        <Link href="/login">
          <a className="hover:bg-gray-600">Login</a>
        </Link>
        <Link href="/reg">
          <a className="hover:bg-gray-600">Registration</a>
        </Link>
        <Link href="/courses">
          <a className="hover:bg-gray-600">Courses</a>
        </Link>
        <Link href="/faq">
          <a className="hover:bg-gray-600">FAQ</a>
        </Link>
      </div>
    </>
  );
}
