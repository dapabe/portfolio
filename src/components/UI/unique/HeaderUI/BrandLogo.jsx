import CustomLink from "@ui/router/CustomLink";
export default function Brand({ ...props }) {
  return (
    <CustomLink
      to="/"
      className="brandLogo"
      onClick={() => window.scroll(0, 0)}
      {...props}
    >
      dpb
    </CustomLink>
  );
}
