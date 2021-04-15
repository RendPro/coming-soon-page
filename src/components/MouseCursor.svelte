<script lang="ts">
  let parent: HTMLElement;
</script>

<span bind:this={parent} />

<style>
  span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #5d5d5d;
    left: 0;
    top: 0;
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    span {
      display: none;
    }
  }
</style>
