export default function Backdrop({ displayCondition = false, ...props }) {
  return (
    <div
      className={`absolute inset-0 ${
        displayCondition ? "bg-black/90" : "bg-black/0"
      }`}
      {...props}
    />
  );
}