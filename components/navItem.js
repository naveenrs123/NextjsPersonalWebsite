export default function NavItem({ title }) {
  return (
    <li className="hover:bg-red-500 px-2 py-1 mx-2">
    <a className="text-white" href="#">
      {title}
    </a>
  </li>
  )
}
