import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <section className="max-w-2xl">{children}</section>;
};
