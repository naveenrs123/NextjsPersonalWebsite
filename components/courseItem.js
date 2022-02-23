export default function CourseItem({ name, desc }) {
  return (
    <div className="mt-3">
      <p className="text-lg">
        <strong className="text-red-500">{name}</strong>
      </p>
      <p className="text-lg">{desc}</p>
    </div>
  );
}
