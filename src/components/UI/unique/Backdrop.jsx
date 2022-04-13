export default function Backdrop({ displayCondition, ...props }) {
  return (
    <div
      className={`backdrop ${displayCondition ? "bg-black/90" : "bg-black/0"}`}
      {...props}
    />
  );
}
