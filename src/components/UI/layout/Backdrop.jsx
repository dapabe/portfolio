export default function Backdrop({ displayCondition = false, ...props }) {
  return (
    <div
      className={`fixed inset-0 ${displayCondition ? "bg-black/90" : "hidden"}`}
      {...props}
    />
  );
}
