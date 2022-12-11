"use client"
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import useMount from "$hooks/useMount";

interface Props {
  htmlId: string;
  children: ReactNode;
}

export default function Portal({ htmlId, children }: Props) {
  const { isMounted } = useMount();

  return isMounted
    ? createPortal(children, document.getElementById(htmlId))
    : null;
}
