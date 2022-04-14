export default function Backdrop({ displayCondition, ...props }) {
  return (
    <div
      className={`absolute inset-0 transition-colors ${
        displayCondition ? "bg-black/90" : "bg-black/0"
      }`}
      {...props}
    />
  );
}
