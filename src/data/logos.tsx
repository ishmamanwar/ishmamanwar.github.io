import React from "react";

export const Logos = {
  React: (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g fill="none" stroke="currentColor" strokeWidth="16">
        <circle cx="128" cy="128" r="24" />
        <ellipse cx="128" cy="128" rx="84" ry="32" />
        <ellipse cx="128" cy="128" rx="84" ry="32" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="84" ry="32" transform="rotate(120 128 128)" />
      </g>
    </svg>
  ),
  Vue: (
    <svg viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="currentColor" d="M130.88 0L98.16 56.67 65.44 0H0l130.88 226.69L261.76 0h-65.44l-32.72 56.67L130.88 0z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="256" height="256" rx="16" ry="16" fill="none" stroke="currentColor" strokeWidth="12" />
      <path fill="currentColor" d="M120 96h-56v16h20v64h16v-64h20zM172 176c-14 0-24-9-24-20h16c0 5 4 8 8 8 6 0 8-3 8-6 0-4-3-6-13-9-11-4-19-9-19-21 0-12 10-22 24-22 13 0 22 8 24 19h-16c-1-3-4-5-8-5-5 0-8 3-8 6 0 4 4 6 13 9 11 4 19 9 19 21 0 13-10 22-24 22z" />
    </svg>
  ),
  Node: (
    <svg viewBox="0 0 256 272" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <polygon fill="none" stroke="currentColor" strokeWidth="12" points="128,12 236,74 236,198 128,260 20,198 20,74" />
      <path fill="currentColor" d="M128 104c-27 0-48 15-48 44s21 44 48 44c22 0 35-8 44-21l-18-10c-5 7-12 12-26 12-16 0-28-9-28-25s12-25 28-25c14 0 21 5 26 12l18-10c-9-13-22-21-44-21z" />
    </svg>
  ),
  Flask: (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="none" stroke="currentColor" strokeWidth="12" d="M80 24c16 80 56 136 136 152-24 40-72 56-120 48S24 176 32 136c8-40 24-80 48-112z" />
    </svg>
  ),
  "ASP.NET Core": (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeWidth="12" />
      <path fill="currentColor" d="M96 160l32-64 32 64h-16l-16-32-16 32z" />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="none" stroke="currentColor" strokeWidth="12" d="M24 168c20-40 56-64 104-64s84 24 104 64" />
      <circle cx="88" cy="96" r="8" fill="currentColor" />
      <circle cx="168" cy="96" r="8" fill="currentColor" />
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="currentColor" d="M128 0c-32 0-52 16-60 48 12-16 26-22 44-18 10 2 18 10 26 18 10 8 20 14 34 14 32 0 52-16 60-48-12 16-26 22-44 18-10-2-18-10-26-18-10-8-20-14-34-14zM68 90c-32 0-52 16-60 48 12-16 26-22 44-18 10 2 18 10 26 18 10 8 20 14 34 14 32 0 52-16 60-48-12 16-26 22-44 18-10-2-18-10-26-18-10-8-20-14-34-14z" />
    </svg>
  ),
  "Azure DevOps": (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <polygon points="56,64 136,24 200,72 200,184 120,232 56,184" fill="none" stroke="currentColor" strokeWidth="12" />
      <path d="M136 24v48l64 48" fill="none" stroke="currentColor" strokeWidth="12" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="40" y="40" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" strokeWidth="12" />
      <circle cx="128" cy="92" r="10" fill="currentColor" />
      <circle cx="96" cy="164" r="10" fill="currentColor" />
      <circle cx="160" cy="164" r="10" fill="currentColor" />
      <path d="M128 102v36l-32 26M128 138l32 26" fill="none" stroke="currentColor" strokeWidth="12" />
    </svg>
  ),
} as const;

export type LogosKey = keyof typeof Logos;

export function renderLogo(key: string) {
  const Icon = (Logos as Record<string, JSX.Element>)[key];
  return Icon ?? <div className="w-full h-full rounded border border-neutral-400" aria-hidden />;
}
