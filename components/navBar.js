import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <ul className="flex py-5 bg-slate-800 justify-center">
      <NavItem title="About" path="/"></NavItem>
      <NavItem title="Skills + Education" path="/SkillsEducation"></NavItem>
      <NavItem title="Experience" path="/Experience"></NavItem>
      <NavItem title="Projects" path="/"></NavItem>
    </ul>
  );
}
