import React from "react";

/**
 * Monochrome, clean SVG logo set that adapts to currentColor.
 * Keys match the strings used in SKILL_GROUPS exactly (with a few aliases).
 */

const strokeCommon = {
  stroke: "currentColor",
  strokeWidth: 12,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Logos = {
  /* ========== Languages ========== */
  "C#": (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="C#">
      <rect
        x="24"
        y="24"
        width="208"
        height="208"
        rx="22"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M116 92c-22 0-40 18-40 40s18 40 40 40c13 0 22-4 30-12"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M162 108v64M186 108v64M150 132h48M150 148h48"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  TypeScript: (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="TypeScript"
    >
      <rect
        x="24"
        y="24"
        width="208"
        height="208"
        rx="22"
        fill="none"
        {...strokeCommon}
      />
      <path d="M68 100h60M98 100v76" fill="none" {...strokeCommon} />
      <path
        d="M156 176c-14 0-24-8-24-20h18c0 6 4 10 12 10s12-4 12-10-6-9-17-12c-13-4-25-9-25-24s12-26 30-26c18 0 30 10 32 26h-18c-1-7-6-10-14-10s-12 4-12 10 7 10 18 13c13 4 24 10 24 23 0 17-14 30-36 30z"
        fill="currentColor"
      />
    </svg>
  ),
  JavaScript: (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="JavaScript"
    >
      <rect
        x="24"
        y="24"
        width="208"
        height="208"
        rx="22"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M108 96v68c0 18-10 28-28 28-12 0-20-4-26-10l12-12c3 3 7 4 12 4 7 0 12-4 12-12V96h18z"
        fill="currentColor"
      />
      <path
        d="M138 154c0-20 14-34 36-34 18 0 30 8 34 24l-16 4c-3-8-9-12-18-12-12 0-20 8-20 20s8 20 20 20c9 0 15-4 18-12l16 4c-4 16-16 24-34 24-22 0-36-14-36-34z"
        fill="currentColor"
      />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Python">
      <path
        d="M140 40h-44a28 28 0 0 0-28 28v32a20 20 0 0 0 20 20h68a28 28 0 0 1 28 28v20a40 40 0 0 1-40 40h-36"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M116 216h44a28 28 0 0 0 28-28v-32a20 20 0 0 0-20-20h-68a28 28 0 0 1-28-28V88a40 40 0 0 1 40-40h36"
        fill="none"
        {...strokeCommon}
      />
      <circle cx="98" cy="76" r="8" fill="currentColor" />
      <circle cx="158" cy="180" r="8" fill="currentColor" />
    </svg>
  ),

  /* ========== Frontend ========== */
  HTML5: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="HTML5">
      <path
        d="M48 28h160l-16 176-64 24-64-24L48 28z"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M88 72h80M84 112h88M96 152h64M104 192l24 8 24-8 4-40h-56z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="CSS">
      <path
        d="M48 28h160l-16 176-64 24-64-24L48 28z"
        fill="none"
        {...strokeCommon}
      />
      <path d="M92 80h76M88 120h80M120 160h48" fill="none" {...strokeCommon} />
      <path d="M104 200l24 8 24-8" fill="none" {...strokeCommon} />
    </svg>
  ),
  SCSS: (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="SCSS / Sass"
    >
      <path
        d="M56 152c0-32 44-54 72-66 26-11 52-10 64 6 10 14-2 30-24 34 22 4 32 22 18 38-17 18-54 16-78 4"
        fill="none"
        {...strokeCommon}
      />
      <path d="M96 192c12 10 28 12 44 10" fill="none" {...strokeCommon} />
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Bootstrap">
      <rect
        x="36"
        y="36"
        width="184"
        height="184"
        rx="28"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M96 84h64a28 28 0 0 1 0 56H96zM96 140h60a26 26 0 0 1 0 52H96z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  "Tailwind CSS": (
    <svg
      viewBox="0 0 256 154"
      className="w-full h-full"
      aria-label="Tailwind CSS"
    >
      <path
        d="M80 52c16-28 40-40 72-36 18 3 32 14 44 26-8 14-24 24-44 24-14 0-24-6-32-14-10-8-18-12-32-10-12 2-24 8-32 18 6-2 14-8 24-8zM52 110c16-28 40-40 72-36 18 3 32 14 44 26-8 14-24 24-44 24-14 0-24-6-32-14-10-8-18-12-32-10-12 2-24 8-32 18 6-2 14-8 24-8z"
        fill="currentColor"
      />
    </svg>
  ),
  "React.js": (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="React">
      <g fill="none" stroke="currentColor" strokeWidth="12">
        <circle cx="128" cy="128" r="14" fill="currentColor" />
        <ellipse cx="128" cy="128" rx="90" ry="36" />
        <ellipse
          cx="128"
          cy="128"
          rx="90"
          ry="36"
          transform="rotate(60 128 128)"
        />
        <ellipse
          cx="128"
          cy="128"
          rx="90"
          ry="36"
          transform="rotate(120 128 128)"
        />
      </g>
    </svg>
  ),
  "Vue.js": (
    <svg viewBox="0 0 261 226" className="w-full h-full" aria-label="Vue.js">
      <path
        d="M130.5 12L98 68 66 12H12l118.5 202L249 12h-54l-32 56-32.5-56z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),

  /* ========== Backend & APIs ========== */
  "ASP.NET Core": (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="ASP.NET Core"
    >
      <circle cx="128" cy="128" r="96" fill="none" {...strokeCommon} />
      <path d="M76 160l28-64 28 64M92 128h24" fill="none" {...strokeCommon} />
      <path
        d="M168 96c-26 0-40 16-40 40s14 40 40 40c20 0 32-10 36-24l-20-4c-2 8-8 12-16 12-12 0-20-10-20-24s8-24 20-24c8 0 14 4 16 12l20-4c-4-14-16-24-36-24z"
        fill="currentColor"
      />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Node.js">
      <polygon
        points="128,20 228,78 228,178 128,236 28,178 28,78"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M101 128c0-18 13-30 33-30 17 0 28 6 33 18l-16 6c-3-6-8-9-17-9-11 0-17 6-17 15s6 15 17 15c9 0 14-3 17-9l16 6c-5 12-16 18-33 18-20 0-33-12-33-30z"
        fill="currentColor"
      />
    </svg>
  ),
  "Express.js": (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="Express.js"
    >
      <path d="M40 168V88h56M40 128h46" fill="none" {...strokeCommon} />
      <path
        d="M126 168l44-64 44 64M170 136l-18 26"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  Flask: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Flask">
      <path
        d="M84 24c18 84 60 144 144 160-26 42-78 60-130 50S24 184 32 140c8-42 26-84 52-116z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  REST: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="REST API">
      <rect
        x="24"
        y="56"
        width="208"
        height="144"
        rx="14"
        fill="none"
        {...strokeCommon}
      />
      <path d="M56 100h52M56 128h72M56 156h44" fill="none" {...strokeCommon} />
      <circle cx="196" cy="128" r="26" fill="none" {...strokeCommon} />
      <path d="M196 114v14l10 10" fill="none" {...strokeCommon} />
    </svg>
  ),

  /* ========== Databases ========== */
  MySQL: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="MySQL">
      <path
        d="M36 176c20-44 60-68 108-68s88 24 108 68"
        fill="none"
        {...strokeCommon}
      />
      <path d="M124 96c10-18 30-30 56-28" fill="none" {...strokeCommon} />
      <circle cx="96" cy="96" r="6" fill="currentColor" />
      <circle cx="160" cy="96" r="6" fill="currentColor" />
    </svg>
  ),
  PostgreSQL: (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="PostgreSQL"
    >
      <path
        d="M88 104c0-28 26-48 56-48s56 20 56 48v20c0 28-26 48-56 48l-12 32-16-34c-16-8-28-22-28-46v-20z"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M144 76c-12 0-20 6-20 14 0 10 8 14 20 14 12 0 20-4 20-14 0-8-8-14-20-14z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="MongoDB">
      <path
        d="M128 36c8 18 40 48 40 98 0 46-24 70-40 86-16-16-40-40-40-86 0-50 32-80 40-98z"
        fill="none"
        {...strokeCommon}
      />
      <path d="M128 52v152" fill="none" {...strokeCommon} />
    </svg>
  ),
  SQLite: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="SQLite">
      <rect
        x="44"
        y="32"
        width="168"
        height="192"
        rx="14"
        fill="none"
        {...strokeCommon}
      />
      <path d="M72 68h112M72 96h112M72 124h112" fill="none" {...strokeCommon} />
      <path
        d="M140 160c-8 10-18 16-28 18 4-12 8-24 18-32 8-6 18-8 28-6-2 10-4 18-18 20z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),

  /* ========== Testing ========== */
  Vitest: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Vitest">
      <polygon
        points="128,28 220,74 220,182 128,228 36,182 36,74"
        fill="none"
        {...strokeCommon}
      />
      <path d="M88 132l26 26 54-62" fill="none" {...strokeCommon} />
    </svg>
  ),
  Jest: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Jest">
      <path
        d="M80 84a16 16 0 1 0 32 0 16 16 0 1 0-32 0zM144 84a16 16 0 1 0 32 0 16 16 0 1 0-32 0zM112 84v28c0 31-24 56-56 56h144c-32 0-56-25-56-56V84"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  "React Testing Library": (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="React Testing Library"
    >
      <path
        d="M128 44l16 28h32l-16 28 16 28h-32l-16 28-16-28H80l16-28-16-28h32l16-28z"
        fill="none"
        {...strokeCommon}
      />
      <path d="M96 196h64" fill="none" {...strokeCommon} />
    </svg>
  ),
  Pytest: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Pytest">
      <path
        d="M84 76h44a24 24 0 0 1 24 24v20H96a24 24 0 0 1-24-24V76z"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M172 180h-44a24 24 0 0 1-24-24v-20h56a24 24 0 0 1 24 24v20z"
        fill="none"
        {...strokeCommon}
      />
      <path d="M108 92h6" {...strokeCommon} />
      <path d="M142 164h6" {...strokeCommon} />
    </svg>
  ),

  /* ========== DevOps ========== */
  Git: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Git">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="16"
        fill="none"
        {...strokeCommon}
      />
      <circle cx="128" cy="80" r="10" fill="currentColor" />
      <circle cx="96" cy="176" r="10" fill="currentColor" />
      <circle cx="160" cy="176" r="10" fill="currentColor" />
      <path d="M128 90v54l-32 32M128 144l32 32" fill="none" {...strokeCommon} />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Docker">
      <rect
        x="72"
        y="104"
        width="28"
        height="28"
        fill="none"
        {...strokeCommon}
      />
      <rect
        x="104"
        y="104"
        width="28"
        height="28"
        fill="none"
        {...strokeCommon}
      />
      <rect
        x="136"
        y="104"
        width="28"
        height="28"
        fill="none"
        {...strokeCommon}
      />
      <rect
        x="104"
        y="136"
        width="28"
        height="28"
        fill="none"
        {...strokeCommon}
      />
      <rect
        x="136"
        y="136"
        width="28"
        height="28"
        fill="none"
        {...strokeCommon}
      />
      <rect
        x="168"
        y="136"
        width="28"
        height="28"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M216 164c12 0 24-8 24-20-8 0-14-2-22-6-2-1-6 0-6 4 0 12-12 22-32 22H56c-8 0-16 6-16 14s8 14 16 14h120c42 0 56-12 64-28z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  "Azure DevOps": (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="Azure DevOps"
    >
      <path
        d="M84 60l60-28 64 44v108l-64 40-56-40"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M84 60v52l48 36-48 38-28-22V84l28-24z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  "CI/CD": (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="CI/CD">
      <path d="M84 100h40l-20-20 20-20H84z" fill="none" {...strokeCommon} />
      <path d="M172 156h-40l20 20-20 20h40z" fill="none" {...strokeCommon} />
      <circle cx="128" cy="128" r="88" fill="none" {...strokeCommon} />
    </svg>
  ),
  PowerShell: (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="PowerShell"
    >
      <rect
        x="28"
        y="52"
        width="200"
        height="152"
        rx="14"
        fill="none"
        {...strokeCommon}
      />
      <path d="M84 100l52 28-52 28M124 164h44" fill="none" {...strokeCommon} />
    </svg>
  ),
  Bash: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Bash">
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="14"
        fill="none"
        {...strokeCommon}
      />
      <path d="M68 120l24 16-24 16M116 152h44" fill="none" {...strokeCommon} />
    </svg>
  ),

  /* ========== AI & Dev Tools ========== */
  ChatGPT: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="ChatGPT">
      {/* chat bubble */}
      <path
        d="M44 72a44 44 0 0 1 44-44h80a44 44 0 0 1 44 44v40a44 44 0 0 1-44 44H120l-36 24v-24h-4a44 44 0 0 1-44-44V72z"
        fill="none"
        {...strokeCommon}
      />
      {/* three dots */}
      <circle cx="112" cy="112" r="8" fill="currentColor" />
      <circle cx="144" cy="112" r="8" fill="currentColor" />
      <circle cx="176" cy="112" r="8" fill="currentColor" />
      {/* subtle spark */}
      <path d="M196 60l6 6M202 60l-6 6" {...strokeCommon} />
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="OpenAI">
      <polygon
        points="128,28 216,80 216,176 128,228 40,176 40,80"
        fill="none"
        {...strokeCommon}
      />
      <circle cx="128" cy="128" r="30" fill="none" {...strokeCommon} />
      <path
        d="M128 74v20M128 162v20M182 128h-20M74 128h20M159 97l-14 14M111 145l-14 14M159 159l-14-14M111 111l-14-14"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  Claude: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Claude">
      <rect
        x="36"
        y="36"
        width="184"
        height="184"
        rx="28"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M128 72v56M128 128l40 40M128 128l-40 40"
        fill="none"
        {...strokeCommon}
      />
      <circle cx="128" cy="128" r="22" fill="none" {...strokeCommon} />
    </svg>
  ),
  Cursor: (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="Cursor IDE"
    >
      <rect
        x="28"
        y="36"
        width="200"
        height="184"
        rx="16"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M72 96l28 32-28 32M184 96l-28 32 28 32"
        fill="none"
        {...strokeCommon}
      />
      <path d="M128 92l24 64-18-8-10 18z" fill="none" {...strokeCommon} />
    </svg>
  ),

  /* ========== Platforms & Hosting ========== */
  Vercel: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Vercel">
      <polygon points="128,36 224,220 32,220" fill="currentColor" />
    </svg>
  ),
  Render: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Render">
      <rect
        x="28"
        y="28"
        width="200"
        height="200"
        rx="24"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M88 176v-96h48c20 0 36 16 36 36s-16 36-36 36H88zM136 116h-20v32h20c9 0 16-7 16-16s-7-16-16-16z"
        fill="currentColor"
      />
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Supabase">
      <path
        d="M128 28l-64 96h52v104l76-112h-56z"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  "GitHub Pages": (
    <svg
      viewBox="0 0 256 256"
      className="w-full h-full"
      aria-label="GitHub Pages"
    >
      <rect
        x="40"
        y="36"
        width="176"
        height="184"
        rx="16"
        fill="none"
        {...strokeCommon}
      />
      <path d="M72 76h112M72 108h112M72 140h80" fill="none" {...strokeCommon} />
      <circle cx="180" cy="180" r="22" fill="none" {...strokeCommon} />
      <path d="M172 176c0-8 6-14 14-14" fill="none" {...strokeCommon} />
    </svg>
  ),

  /* ========== Practices (generic glyphs) ========== */
  Agile: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Agile">
      <circle cx="128" cy="128" r="84" fill="none" {...strokeCommon} />
      <path
        d="M88 168l-16-40h40M168 88l16 40h-40"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M92 120c8-24 28-40 52-40 30 0 56 26 56 56"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  Scrum: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Scrum">
      <circle cx="116" cy="116" r="44" fill="none" {...strokeCommon} />
      <path d="M160 136c24 0 40 20 40 40H84" fill="none" {...strokeCommon} />
      <path d="M84 176l-16 16 16 16" fill="none" {...strokeCommon} />
    </svg>
  ),
  Kanban: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="Kanban">
      <rect
        x="32"
        y="44"
        width="192"
        height="168"
        rx="16"
        fill="none"
        {...strokeCommon}
      />
      <path
        d="M96 60v136M160 60v136M64 92h32M64 140h32M128 108h32M128 156h32M192 92h16M192 140h16"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
  TDD: (
    <svg viewBox="0 0 256 256" className="w-full h-full" aria-label="TDD">
      <rect
        x="36"
        y="56"
        width="184"
        height="144"
        rx="16"
        fill="none"
        {...strokeCommon}
      />
      <path d="M76 100h40M76 128h40M76 156h40" fill="none" {...strokeCommon} />
      <path
        d="M132 100h44M132 128h44M132 156h44"
        fill="none"
        {...strokeCommon}
      />
    </svg>
  ),
} as const;

export type LogosKey = keyof typeof Logos;

/** Optional aliases so your labels remain flexible without breaking icons */
const ALIASES: Record<string, LogosKey> = {
  React: "React.js",
  Vue: "Vue.js",
  Node: "Node.js",
  Express: "Express.js",
  RTL: "React Testing Library",
  "Testing Library": "React Testing Library",
  Github: "GitHub Pages",
  GitHub: "GitHub Pages",
  HTML: "HTML5",
  CSS3: "CSS",
  Sass: "SCSS",
  SASS: "SCSS",
  Tailwind: "Tailwind CSS",
  TailwindCSS: "Tailwind CSS",

  // AI tool aliases
  GPT: "ChatGPT",
  "GPT-4": "ChatGPT",
  "GPT-3.5": "ChatGPT",
  "OpenAI API": "OpenAI",
  Anthropic: "Claude",
  "Cursor IDE": "Cursor",
};

export function renderLogo(key: string) {
  const k = (ALIASES[key] as LogosKey) ?? (key as LogosKey);
  const Icon = (Logos as Record<string, JSX.Element>)[k];
  return (
    Icon ?? (
      <svg viewBox="0 0 256 256" className="w-full h-full" aria-hidden>
        <rect
          x="28"
          y="28"
          width="200"
          height="200"
          rx="18"
          fill="none"
          {...strokeCommon}
        />
        <path d="M88 128h80M128 88v80" fill="none" {...strokeCommon} />
      </svg>
    )
  );
}
