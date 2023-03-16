import { LogosGithubIcon } from "./LogosGithubIcon";
import { LogosGitIcon } from "./LogosGitIcon";
import { LogosLinkedinIcon } from "./LogosLinkedinIcon";

type IICON = {
  [x: string]: {
    [x: string]: JSX.Element;
  };
};
const ICONS: IICON = {
  SOCIAL: {
    GITHUB: <LogosGithubIcon />,
    GIT: <LogosGitIcon />,
    LINKEDIN: <LogosLinkedinIcon />,
  },
};

export default ICONS;
