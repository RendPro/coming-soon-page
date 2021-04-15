<script lang="ts">
  import Icon from "@iconify/svelte";

  let parent: HTMLElement;
  export let icon: any;
</script>

<div bind:this={parent}>
  <Icon {icon} />
</div>

<style>
  div {
    position: absolute;
    font-size: 10rem;
    left: 21%;
    top: 15%;
  }

  div:last-of-type {
    right: 21%;
    bottom: 15%;
    left: unset;
    top: unset;
  }

  @media (max-width: 1024px) {
    div {
      display: none;
    }
  }
</style>
