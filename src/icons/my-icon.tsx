import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export const MyLogo = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      id="my-logo"
      viewBox="0 0 512 512"
      {...props}
    >
      <defs>
        {/* <!-- Premium Dark Gradient Background --> */}
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2A2D34" />
          <stop offset="100%" stop-color="#111215" />
        </linearGradient>

        {/* <!-- Metallic/Bright Text Gradient for depth --> */}
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#D1D5DB" />
        </linearGradient>

        {/* <!-- Subtle Drop Shadow for a 3D "Badge" effect --> */}
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="16"
            flood-color="#000000"
            flood-opacity="0.4"
          />
        </filter>
      </defs>

      {/* <!--
    The outer area is naturally transparent.
    Only the circle and its contents are drawn.
  -->

  <!-- Main Circular Background --> */}
      <circle cx="256" cy="256" r="240" fill="url(#bgGradient)" filter="url(#dropShadow)" />

      {/* <!-- Inner Border Ring (Adds a subtle "Camera Lens" or premium emblem feel) --> */}
      <circle
        cx="256"
        cy="256"
        r="224"
        fill="none"
        stroke="#FFFFFF"
        stroke-opacity="0.06"
        stroke-width="2"
      />

      {/* <!-- Typography and Slash Group --> */}
      <g fill="url(#textGradient)">
        {/* <!--
      The Slash
      Modernized into a precise, rounded geometric element instead of a standard text slash
    --> */}
        <rect
          data-component-id="src/icons/my-icon.tsx:67:8"
          x="250"
          y="138"
          width="24"
          height="240"
          rx="16"
          transform="rotate(35 256 256)"
        />
        {/* <!--
      Letter D
      Visually balanced in the top-left quadrant using system UI fonts for a clean, bold look
    --> */}
        <text
          x="150"
          y="190"
          font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          font-size="160"
          font-weight="900"
          text-anchor="middle"
          dominant-baseline="central"
        >
          D
        </text>

        {/* <!--
      Letter S
      Mathematically balanced in the bottom-right quadrant
    --> */}
        <text
          x="362"
          y="322"
          font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          font-size="160"
          font-weight="900"
          text-anchor="middle"
          dominant-baseline="central"
        >
          S
        </text>
      </g>
    </svg>
  );
};
