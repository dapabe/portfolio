import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";

import { FormContact } from "@ui/Content/exports";

export default function SectionContact() {
  const { width } = useWindowSize();
  return (
    <section className="flex min-h-[60vh]">
      <FormContact />
    </section>
  );
}
