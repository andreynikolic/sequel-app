<script>
  import { animate as animateFn } from '../_utils/animate'
  import { reduceMotion } from '../_store/local'

  export let href
  export let className = ''
  export let style = ''
  export let ariaLabel = ''

  const inlineSvgs = new Set(process.env.INLINE_SVGS)

  $: inline = inlineSvgs.has(href)

  let svg

  export function animate (animation) {
    if (animation && !$reduceMotion) {
      animateFn(svg, animation)
    }
  }
</script>

<svg
  class={className}
  {style}
  aria-hidden={!ariaLabel}
  aria-label={ariaLabel}
  bind:this={svg}>
  <use xlink:href="{inline ? '' : '/icons.svg'}{href}" />
</svg>

