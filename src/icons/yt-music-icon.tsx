import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export const YTMusicLogo = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://ns.adobe.com/Extensibility/1.0/"
      version="1.1"
      id="yt-music-logo"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 176 176"
      className={className}
      {...props}
    >
      <g id="XMLID_167_">
        <circle id="XMLID_791_" fill="#FF0000" cx="88" cy="88" r="88" />
        <path
          id="XMLID_42_"
          fill="#FFFFFF"
          d="M88,46c23.1,0,42,18.8,42,42s-18.8,42-42,42s-42-18.8-42-42S64.9,46,88,46 M88,42   c-25.4,0-46,20.6-46,46s20.6,46,46,46s46-20.6,46-46S113.4,42,88,42L88,42z"
        />
        <polygon id="XMLID_274_" fill="#FFFFFF" points="72,111 111,87 72,65  " />
      </g>
    </svg>
  );
};
