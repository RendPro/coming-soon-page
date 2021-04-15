<script lang="ts">
  import {
    buttonClass,
    buttonsWrapperClass,
    headlineClass,
    logoClass,
    paragraphClass,
  } from "./App.styles.ts";
  import Icon from "@iconify/svelte";
  import facebookIcon from "@iconify/icons-dashicons/facebook-alt";
  import instagramIcon from "@iconify/icons-akar-icons/instagram-fill";
  import worldIcon from "@iconify/icons-subway/world-1";
  import rocketIcon from "@iconify/icons-noto/rocket";
  import womanIcon from "@iconify/icons-noto/woman-astronaut-light-skin-tone";
  import { SOCIAL_LINKS } from "./config";
  import { onMount } from "svelte";
  import gsap from "gsap/all";

  import ParallaxItem from "./components/ParallaxItem.svelte";
  import MouseCursor from "./components/MouseCursor.svelte";

  let parallaxItems: any = [];
  let mouseCursor: any;
  let isScale: boolean = false;

  $: {
    if (isScale) {
      gsap.to(mouseCursor?.$$.ctx[0], {
        scale: 1.4,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(mouseCursor?.$$.ctx[0], {
        scale: 1,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }

  const setScaleTrue = () => {
    if (window.innerWidth < 1024) return;
    isScale = true;
  };

  const setScaleFalse = () => {
    if (window.innerWidth < 1024) return;
    isScale = false;
  };

  onMount(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();

    const mouseMoveEffects = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;

      const x = (window.innerWidth - e.pageX * 10) / 100;
      const y = (window.innerHeight - e.pageY * 10) / 100;

      gsap.to(parallaxItems[0].$$.ctx[1], {
        x,
        y,
        duration: 2,
        ease: "expo.out",
      });

      gsap.to(parallaxItems[1].$$.ctx[1], {
        x: -x,
        y: -y,
        duration: 2,
        ease: "expo.out",
      });

      gsap.to(mouseCursor.$$.ctx[0], {
        x: e.pageX - 20,
        y: e.pageY - 20,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      });
    };

    document.addEventListener("mousemove", mouseMoveEffects);
    document.addEventListener("mousedown", setScaleTrue);
    document.addEventListener("mouseup", setScaleFalse);
    window.addEventListener("resize", setVh);

    return () => {
      document.removeEventListener("mousemove", mouseMoveEffects);
      document.removeEventListener("mousedown", setScaleTrue);
      document.removeEventListener("mouseup", setScaleFalse);
      window.removeEventListener("resize", setVh);
    };
  });
</script>

<img
  src="assets/logo.svg"
  alt="RendPro strony internetowy i wizualizacje 3D"
  class={logoClass}
/>

<p class={paragraphClass}>Strona w produkcji</p>

<h1 class={headlineClass}>Rend<span>kodujemy</span> tę stronę</h1>

<p class={paragraphClass}>
  Zamierzamy niedługo uruchomić tę witrynę. Bądź czujny!
</p>

<div class={buttonsWrapperClass}>
  <a
    href={SOCIAL_LINKS.FACEBOOK}
    class={buttonClass}
    aria-label="Facebook"
    target="_blank"
    rel="noopener"
    on:mouseenter={setScaleTrue}
    on:mouseleave={setScaleFalse}
  >
    <Icon icon={facebookIcon} />
  </a>

  <a
    href={SOCIAL_LINKS.INSTAGRAM}
    class={buttonClass}
    aria-label="Instagram"
    target="_blank"
    rel="noopener"
    on:mouseenter={setScaleTrue}
    on:mouseleave={setScaleFalse}
  >
    <Icon icon={instagramIcon} />
  </a>

  <a
    href={SOCIAL_LINKS.WEBSITE}
    class={buttonClass}
    aria-label="Strona www"
    target="_blank"
    rel="noopener"
    on:mouseenter={setScaleTrue}
    on:mouseleave={setScaleFalse}
  >
    <Icon icon={worldIcon} />
  </a>
</div>

<ParallaxItem icon={womanIcon} bind:this={parallaxItems[0]} />
<ParallaxItem icon={rocketIcon} bind:this={parallaxItems[1]} />

<MouseCursor bind:this={mouseCursor} />

<style>
  :global(*, *::before, *::after) {
    box-sizing: border-box;
  }

  :global(html) {
    font-size: 62.5%;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  :global(body) {
    width: 100%;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    background: linear-gradient(
      106.92deg,
      #fee9d0 -2.34%,
      #ffffff 61.97%,
      #df94f2 137.97%
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    flex-direction: column;
    padding: 50px 0;
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    :global(body) {
      padding: 50px 5%;
    }
  }
</style>
