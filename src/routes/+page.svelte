<script>
  import { browser } from '$app/environment'
  import { MediaQuery } from 'svelte/reactivity'

  const isFullScreen = new MediaQuery('display-mode: fullscreen')

  const goFullscreen = () => {
    if (!browser) return

    document.documentElement.requestFullscreen()
  }
</script>

<h1>Push the button, Frank</h1>

{#if !isFullScreen.current}
  <button onclick={goFullscreen}>Full Screen</button>
{/if}
