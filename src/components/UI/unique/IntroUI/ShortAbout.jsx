import { Link } from "react-router-dom";
export default function ShortAbout() {
  return (
    <div className="intro_shortAbout">
      <h2 className="font-semibold">Un poco acerca de mi</h2>
      <p className="indent-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil
        in porro cupiditate reiciendis natus, a cum mollitia. Voluptate veniam
        sint minima inventore facilis nulla nemo ea, libero reprehenderit quis.
      </p>
      <div className="flex flex-col items-end text-sm">
        <Link
          to="/about"
          className="text-sm underline-offset-2 hover:underline"
        >
          Leér más a detalle <i>&rarr;</i>
        </Link>
      </div>
    </div>
  );
}
