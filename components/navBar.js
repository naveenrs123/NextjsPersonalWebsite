import NavItem from "./navItem";

export default function Navbar() {
  return (
    <ul className="flex py-5 bg-slate-800 justify-center">
      <NavItem title="About" path="/"></NavItem>
      <NavItem title="Skills + Education" path="/skillseducation"></NavItem>
      <NavItem title="Experience" path="/"></NavItem>
      <NavItem title="Projects" path="/"></NavItem>
    </ul>
  );
}
