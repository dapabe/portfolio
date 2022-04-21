import SVGWave1 from "@ui/common/decorations/SVGWave1";
import usePageOffset from "@hooks/usePageOffset";

export default function SectionHero() {
  const { isOffset } = usePageOffset(100);
  console.log(isOffset);
  const hasScrolled = isOffset ? "w-full" : "w-1/2";

  return (
    <section className="heroSection noMaxWidth">
      <section className={`w-1/2 transition-[width] delay-500 ease-in `}>
        <div className="relative h-screen bg-red-500">
          <div className="absolute right-1 top-1/2 flex -translate-y-1/2 translate-x-1/2 items-end">
            <span className="text-champagnePink">dap</span>
            <span className="">abe</span>
            {/* <i className="h-8 w-8 rounded-full bg-red-500" /> */}
          </div>
        </div>
      </section>

      {/* <SVGWave1 position="bottom" display="absolute" /> */}
    </section>
  );
}
