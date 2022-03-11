export default function SocialLinks() {
  const links = [
    [
      "logo-linkedin",
      "https://www.linkedin.com/in/daniel-patricio-becerra-5042681b5/",
    ],
    ["logo-twitter", "https://twitter.com/dDenzere1999"],
    ["logo-instagram", "https://www.instagram.com/_danzen"],
    ["logo-github", "https://github.com/dapabe"],
  ];
  return (
    <ul
      className={
        "absolute top-[50vh] right-0 hidden -translate-y-1/2 sm:block sm:space-y-3"
      }
    >
      {links.map((objName) => {
        return (
          <li key={objName[0]} className="h-8 w-8 hover:scale-110">
            <a href={objName[1]} target="_blank" rel="noopener noreferrer">
              <ion-icon name={objName[0]} size="large" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
