import IconArrowUp from "../../../assets/icons/IconArrowUp";

export default function BackToTop(props) {
  return (
    <a
      href="#main"
      className="fixed right-4 bottom-2 z-20 w-12 rounded-md bg-white"
      {...props}
    >
      <IconArrowUp fill="black" />
    </a>
  );
}
