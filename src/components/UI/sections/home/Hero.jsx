import SVGWave1 from "@ui/common/decorations/SVGWave1";
import usePageOffset from "@hooks/usePageOffset";

export default function SectionHero() {
  return (
    <section className="heroSection noMaxWidth">
      <section className={`w-1/2 transition-[width] delay-500 ease-in `}>
        <div className="relative h-screen bg-red-500">
          <div className="absolute right-1 top-1/2 flex -translate-y-1/2 translate-x-1/2 items-end">
            <span className="text-champagnePink">dap</span>
            <span className="">abe</span>
            <span className="absolute left-full top-2/3 h-8 w-8 -translate-y-1/2 rounded-full bg-red-500" />
          </div>
        </div>
      </section>

      <SVGWave1 position="bottom" display="absolute" />
    </section>
  );
}
