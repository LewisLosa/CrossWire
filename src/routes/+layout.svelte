<!-- NOTE: Some code has been taken from github.com/KTibow/m3-svelte. Please support the developer. -->

<script lang="ts">
  import type { Snippet } from "svelte";
  import iconHome from "@ktibow/iconset-material-symbols/home-outline";
  import iconHomeS from "@ktibow/iconset-material-symbols/home";
  import iconPalette from "@ktibow/iconset-material-symbols/palette-outline";
  import iconPaletteS from "@ktibow/iconset-material-symbols/palette";
  import iconBook from "@ktibow/iconset-material-symbols/book-2-outline";
  import iconBookS from "@ktibow/iconset-material-symbols/book-2";
  import iconCounter1 from "@ktibow/iconset-material-symbols/counter-1-outline";
  import iconCounter1S from "@ktibow/iconset-material-symbols/counter-1";
  import iconCounter2 from "@ktibow/iconset-material-symbols/counter-2-outline";
  import iconCounter2S from "@ktibow/iconset-material-symbols/counter-2";
  import iconCounter3 from "@ktibow/iconset-material-symbols/counter-3-outline";
  import iconCounter3S from "@ktibow/iconset-material-symbols/counter-3";
  import iconCounter4 from "@ktibow/iconset-material-symbols/counter-4-outline";
  import iconCounter4S from "@ktibow/iconset-material-symbols/counter-4";

  import { base, resolve } from "$app/paths";
  import { page } from "$app/state";
  import NavCMLX from "$lib/nav/NavCMLX.svelte";
  import NavCMLXItem from "$lib/nav/NavCMLXItem.svelte";
  import { styling } from "./state";
  import "../app.css";

  let { children }: { children: Snippet } = $props();
  let innerWidth = $state(0);

  // Without the method, translation cannot be done.
  function getPaths() {
    return [
      {
        path: resolve("/"),
        icon: iconHome,
        iconS: iconHomeS,
        label: "Home",
        show: () => true,
      },
      {
        path: resolve("/dpi"),
        icon: iconPalette,
        iconS: iconPaletteS,
        label: "DPI Tools",
        show: () => true,
      },
      {
        path: resolve("/dpi/byedpi"),
        icon: iconCounter1,
        iconS: iconCounter1S,
        label: "ByeDPI",
        show: () => page.url.pathname.startsWith(resolve("/dpi")),
      },
      {
        path: resolve("/dpi/goodbyedpi"),
        icon: iconCounter2,
        iconS: iconCounter2S,
        label: "GoodByeDPI",
        show: () => page.url.pathname.startsWith(resolve("/dpi")),
      },
      {
        path: resolve("/dpi/wiresock"),
        icon: iconCounter3,
        iconS: iconCounter3S,
        label: "WireSock",
        show: () => page.url.pathname.startsWith(resolve("/dpi")),
      },
      {
        path: resolve("/dpi/zapret"),
        icon: iconCounter4,
        iconS: iconCounter4S,
        label: "Zapret",
        show: () => page.url.pathname.startsWith(resolve("/dpi")),
      },
    ];
  }
  const paths = getPaths();
  const normalizePath = (path: string) => {
    const u = new URL(path, page.url.href);
    path = u.pathname;
    if (path.endsWith("/")) path = path.slice(0, -1);
    return path || "/";
  };
</script>

{@html `<style>${$styling}</style>`}
<svelte:window bind:innerWidth />
<div class="my-container">
  <div class="sidebar">
    <NavCMLX variant="auto">
      {#each paths.filter((p) => p.show()) as { path, icon, iconS, label }}
        {@const selected =
          normalizePath(path) === normalizePath(page.url.pathname)}
        <NavCMLXItem
          variant="auto"
          href={normalizePath(path)}
          {selected}
          icon={selected ? iconS : icon}
          text={label}
        />
      {/each}
    </NavCMLX>
  </div>
  <div class="content">
    {@render children()}
  </div>
</div>

<style>
  .my-container {
    display: grid;
    min-height: 100dvh;
  }
  .sidebar {
    display: flex;
    position: sticky;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  @media (width < 52.5rem) {
    .my-container {
      grid-template-rows: 1fr auto;
      --m3-util-bottom-offset: 5rem;
    }
    .sidebar {
      flex-direction: column;
      bottom: 0;
      width: 100%;
      z-index: 3;
      grid-row: 2;
    }
  }
  @media (width >= 52.5rem) {
    .my-container {
      grid-template-columns: auto 1fr;
    }
    .sidebar {
      grid-column: 1;
      top: 0;
      left: 0;
      flex-direction: column;
      height: 100dvh;
      @media (width < 100rem) {
        width: 6rem;
        > :global(nav) {
          position: absolute;
          top: 50%;
          translate: 0 -50%;
        }
      }
    }
    .content {
      padding: 1.5rem;
      grid-column: 2;
    }
  }
</style>
