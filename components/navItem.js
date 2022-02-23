import Link from "next/link";

export default function NavItem({ title, path }) {
  return (
    <li className="hover:bg-red-500 px-2 py-1 mx-2">
      <Link className="text-white" href={path}>
        {title}
      </Link>
    </li>
  );
}
