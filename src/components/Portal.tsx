import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  htmlId: string;
  children: ReactNode;
}

export default function Portal({ htmlId, children }: Props) {


  return createPortal(children, document.getElementById(htmlId))
}
