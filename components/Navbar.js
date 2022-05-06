import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <ul className="flex py-5 bg-slate-800 justify-center">
      <NavItem title="About" path="/"></NavItem>
      <NavItem title="Blog" path="/"></NavItem>
    </ul>
  );
}
