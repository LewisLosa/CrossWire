<!-- NOTE: Some code has been taken from github.com/KTibow/m3-svelte. Please support the developer. -->

<script lang="ts">
  const name = "CrossWire";
  const description =
    " A lightweight application interface to bypass censorship on Windows, Linux, and macOS. ";
  const github = "https://github.com/LewisLosa/CrossWire";
  const discord = "https://discord.gg/CJuhVaq2Aj";
</script>

<div class="branding">
  <div class="row">
    <img
      src="https://ktibow.github.io/favicon.svg"
      alt="KTibow's"
      width="16"
      height="16"
    />
    <h1>{name}</h1>
    <div style:flex-grow="1"></div>
    <a href={github}>GitHub</a>
    <a href={discord}>Discord</a>
  </div>
  <p>{description}</p>
</div>

<style>
  .branding {
    --transition: all var(--m3-util-curve) 500ms;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 1.5rem;
    border-radius: 1.75rem;
    background-color: rgb(var(--m3-scheme-primary-container));
    color: rgb(var(--m3-scheme-on-primary-container));
    transition: var(--transition);
    overflow: hidden;

    &:not(:hover) {
      .row {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        img {
          width: 0;
          height: 0;
          opacity: 0;
        }
        h1 {
          margin-left: 0;
        }
        a {
          width: 0;
          padding-inline: 0;
          margin-left: 0;
          opacity: 0;
        }
      }
      p {
        width: 0;
        height: 0;
        margin-bottom: 0;
      }
    }
    .row {
      display: flex;
      align-items: center;
      transition: var(--transition);
      margin-top: 1.5rem;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        background-color: rgb(var(--m3-scheme-background));
        transition: var(--transition);
      }
      h1 {
        font-weight: bold;
        font-size: 3rem;
        margin: 0 0 0 1.5rem;
        transition: var(--transition);
      }
      a {
        display: flex;
        width: calc-size(auto, size);
        padding-inline: 0.5rem;
        margin-left: 0.5rem;
        border-radius: 1.5rem;
        overflow: hidden;
        background-color: rgb(var(--m3-scheme-primary));
        color: rgb(var(--m3-scheme-on-primary)) !important;
        text-decoration: none !important;
        transition: var(--transition);
      }
    }
    p {
      width: calc-size(auto, size);
      height: 1.5rem;
      margin: 0 0 1.5rem 0;
      overflow: hidden;
      white-space: nowrap;
      transition: var(--transition);
    }
  }
</style>
