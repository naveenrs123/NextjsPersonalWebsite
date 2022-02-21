import NavItem from "./navItem";

export default function Navbar() {
  return (
    <ul className="flex py-5 bg-slate-800 justify-center">
      <NavItem title="About"></NavItem>
      <NavItem title="Skills"></NavItem>
      <NavItem title="Education"></NavItem>
      <NavItem title="Experience"></NavItem>
      <NavItem title="Projects"></NavItem>
    </ul>
  );
}
