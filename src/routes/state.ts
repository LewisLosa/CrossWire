/* NOTE: Some code has been taken from github.com/KTibow/m3-svelte. Please support the developer. */

import { writable } from "svelte/store";

export const styling = writable(`
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
  }
  :root,
  ::backdrop {
    --m3-scheme-background: 249 249 249;
    --m3-scheme-on-background: 50 50 50;
    --m3-scheme-surface: 249 249 249;
    --m3-scheme-surface-dim: 218 218 218;
    --m3-scheme-surface-bright: 249 249 249;
    --m3-scheme-surface-container-lowest: 255 255 255;
    --m3-scheme-surface-container-low: 243 243 243;
    --m3-scheme-surface-container: 238 238 238;
    --m3-scheme-surface-container-high: 232 232 232;
    --m3-scheme-surface-container-highest: 226 226 226;
    --m3-scheme-on-surface: 50 50 50;
    --m3-scheme-on-surface-variant: 95 95 95;
    --m3-scheme-outline: 123 123 123;
    --m3-scheme-outline-variant: 178 178 178;
    --m3-scheme-inverse-surface: 14 14 14;
    --m3-scheme-inverse-on-surface: 157 157 157;
    --m3-scheme-primary: 95 95 95;
    --m3-scheme-primary-dim: 83 83 83;
    --m3-scheme-on-primary: 249 249 249;
    --m3-scheme-primary-container: 235 235 235;
    --m3-scheme-on-primary-container: 87 87 87;
    --m3-scheme-primary-fixed: 235 235 235;
    --m3-scheme-primary-fixed-dim: 221 221 221;
    --m3-scheme-on-primary-fixed: 68 68 68;
    --m3-scheme-on-primary-fixed-variant: 97 97 97;
    --m3-scheme-inverse-primary: 255 255 255;
    --m3-scheme-secondary: 95 95 95;
    --m3-scheme-secondary-dim: 83 83 83;
    --m3-scheme-on-secondary: 249 249 249;
    --m3-scheme-secondary-container: 226 226 226;
    --m3-scheme-on-secondary-container: 82 82 82;
    --m3-scheme-secondary-fixed: 226 226 226;
    --m3-scheme-secondary-fixed-dim: 212 212 212;
    --m3-scheme-on-secondary-fixed: 63 63 63;
    --m3-scheme-on-secondary-fixed-variant: 91 91 91;
    --m3-scheme-tertiary: 95 95 95;
    --m3-scheme-tertiary-dim: 83 83 83;
    --m3-scheme-on-tertiary: 249 249 249;
    --m3-scheme-tertiary-container: 255 255 255;
    --m3-scheme-on-tertiary-container: 98 98 98;
    --m3-scheme-tertiary-fixed: 255 255 255;
    --m3-scheme-tertiary-fixed-dim: 241 241 241;
    --m3-scheme-on-tertiary-fixed: 80 80 80;
    --m3-scheme-on-tertiary-fixed-variant: 109 109 109;
    --m3-scheme-error: 187 27 27;
    --m3-scheme-error-dim: 169 8 16;
    --m3-scheme-on-error: 255 247 246;
    --m3-scheme-error-container: 254 78 68;
    --m3-scheme-on-error-container: 87 0 3;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 95 95 95;
    --m3-scheme-primary-container-subtle: 218 218 218;
    --m3-scheme-on-primary-container-subtle: 76 76 76;
    --m3-scheme-secondary-container-subtle: 218 218 218;
    --m3-scheme-on-secondary-container-subtle: 76 76 76;
    --m3-scheme-tertiary-container-subtle: 218 218 218;
    --m3-scheme-on-tertiary-container-subtle: 76 76 76;
    --m3-scheme-error-container-subtle: 255 207 201;
    --m3-scheme-on-error-container-subtle: 158 0 11;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
  :root,
  ::backdrop {
    --m3-scheme-background: 14 14 14;
    --m3-scheme-on-background: 229 229 229;
    --m3-scheme-surface: 14 14 14;
    --m3-scheme-surface-dim: 14 14 14;
    --m3-scheme-surface-bright: 44 44 44;
    --m3-scheme-surface-container-lowest: 0 0 0;
    --m3-scheme-surface-container-low: 19 19 19;
    --m3-scheme-surface-container: 25 25 25;
    --m3-scheme-surface-container-high: 31 31 31;
    --m3-scheme-surface-container-highest: 38 38 38;
    --m3-scheme-on-surface: 229 229 229;
    --m3-scheme-on-surface-variant: 171 171 171;
    --m3-scheme-outline: 117 117 117;
    --m3-scheme-outline-variant: 72 72 72;
    --m3-scheme-inverse-surface: 249 249 249;
    --m3-scheme-inverse-on-surface: 85 85 85;
    --m3-scheme-primary: 249 249 249;
    --m3-scheme-primary-dim: 235 235 235;
    --m3-scheme-on-primary: 95 95 95;
    --m3-scheme-primary-container: 160 160 160;
    --m3-scheme-on-primary-container: 35 35 35;
    --m3-scheme-primary-fixed: 235 235 235;
    --m3-scheme-primary-fixed-dim: 221 221 221;
    --m3-scheme-on-primary-fixed: 68 68 68;
    --m3-scheme-on-primary-fixed-variant: 97 97 97;
    --m3-scheme-inverse-primary: 95 95 95;
    --m3-scheme-secondary: 198 198 198;
    --m3-scheme-secondary-dim: 185 185 185;
    --m3-scheme-on-secondary: 64 64 64;
    --m3-scheme-secondary-container: 59 59 59;
    --m3-scheme-on-secondary-container: 191 191 191;
    --m3-scheme-secondary-fixed: 226 226 226;
    --m3-scheme-secondary-fixed-dim: 212 212 212;
    --m3-scheme-on-secondary-fixed: 63 63 63;
    --m3-scheme-on-secondary-fixed-variant: 91 91 91;
    --m3-scheme-tertiary: 249 249 249;
    --m3-scheme-tertiary-dim: 235 235 235;
    --m3-scheme-on-tertiary: 95 95 95;
    --m3-scheme-tertiary-container: 235 235 235;
    --m3-scheme-on-tertiary-container: 87 87 87;
    --m3-scheme-tertiary-fixed: 255 255 255;
    --m3-scheme-tertiary-fixed-dim: 241 241 241;
    --m3-scheme-on-tertiary-fixed: 80 80 80;
    --m3-scheme-on-tertiary-fixed-variant: 109 109 109;
    --m3-scheme-error: 255 113 100;
    --m3-scheme-error-dim: 218 52 46;
    --m3-scheme-on-error: 74 0 2;
    --m3-scheme-error-container: 172 12 18;
    --m3-scheme-on-error-container: 255 184 176;
    --m3-scheme-shadow: 0 0 0;
    --m3-scheme-scrim: 0 0 0;
    --m3-scheme-on-on-primary: 249 249 249;
    --m3-scheme-primary-container-subtle: 44 44 44;
    --m3-scheme-on-primary-container-subtle: 171 171 171;
    --m3-scheme-secondary-container-subtle: 44 44 44;
    --m3-scheme-on-secondary-container-subtle: 171 171 171;
    --m3-scheme-tertiary-container-subtle: 44 44 44;
    --m3-scheme-on-tertiary-container-subtle: 171 171 171;
    --m3-scheme-error-container-subtle: 96 0 4;
    --m3-scheme-on-error-container-subtle: 255 137 125;
  }
}

`);
export const appType = writable("vanilla");
