import { useContext } from "react";
import { HeaderContext } from "./HeaderUI/Header";
export default function Backdrop({ ...props }) {
  const { menuClosed } = useContext(HeaderContext);
  return (
    <div
      className={`backdrop ${menuClosed ? "bg-black/90" : "bg-black/0"}`}
      {...props}
    />
  );
}
