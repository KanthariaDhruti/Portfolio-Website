/**
 * The site's entire icon set. Replaces the Font Awesome CDN stylesheet, which
 * cost a render-blocking request to a third party for six glyphs.
 * Brand marks are filled paths; everything else is a 1px stroke to sit at the
 * same visual weight as the hairlines.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Svg = ({ children, size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    {children}
  </svg>
);

export const ArrowUpRight = (props) => (
  <Svg {...props}>
    <path d="M7 17 17 7M9 7h8v8" {...stroke} />
  </Svg>
);

export const ArrowRight = (props) => (
  <Svg {...props}>
    <path d="M4 12h16M14 6l6 6-6 6" {...stroke} />
  </Svg>
);

export const ArrowLeft = (props) => (
  <Svg {...props}>
    <path d="M20 12H4M10 6l-6 6 6 6" {...stroke} />
  </Svg>
);

export const ArrowDown = (props) => (
  <Svg {...props}>
    <path d="M12 4v16M6 14l6 6 6-6" {...stroke} />
  </Svg>
);

export const Mail = (props) => (
  <Svg {...props}>
    <rect x="2.5" y="5" width="19" height="14" rx="1.5" {...stroke} />
    <path d="m3 7 9 6 9-6" {...stroke} />
  </Svg>
);

export const Github = (props) => (
  <Svg {...props}>
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    />
  </Svg>
);

export const Linkedin = (props) => (
  <Svg {...props}>
    <path
      fill="currentColor"
      d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v10.75H3V9.75Zm6.5 0h3.83v1.47h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75v5.48h-4v-4.86c0-1.16-.02-2.65-1.7-2.65-1.7 0-1.96 1.26-1.96 2.57v4.94h-3.98V9.75Z"
    />
  </Svg>
);

export const Instagram = (props) => (
  <Svg {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" {...stroke} />
    <circle cx="12" cy="12" r="4" {...stroke} />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </Svg>
);
