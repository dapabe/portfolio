import CustomLink from "@ui/router/CustomLink";
export default function Brand({ ...props }) {
  return (
    <h1 className="brandLogo" {...props}>
      <CustomLink to="/">dpb</CustomLink>
    </h1>
  );
}
