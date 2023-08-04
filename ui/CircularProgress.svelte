<!-- CircularProgress.svelte -->
<script>
  export let progress;
  
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const progressValue = (progress / 100) * circumference;
  const dashArray = `${progressValue} ${circumference}`;
</script>

<style>
  .progressWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .svg {
    width: 136px;
    height: 136px;
  }

  .circle {
    fill: none;
    stroke-width: 4px;
  }

  .progressArc {
    fill: none;
    stroke: hsla(0, 0%, 100%, 0.7);
    stroke-width: 6px;
    transform-origin: center;
    transition: stroke-dasharray 0.3s;
  }
</style>

<div class="progressWrapper">
  <svg class="svg" viewBox="0 0 136 136">
    <circle class="circle" cx="68" cy="68" r={radius} />
    <path
      class="progressArc"
      d={`M68 ${68 - radius}
          a ${radius} ${radius} 0 0 1 0 ${2 * radius}
          a ${radius} ${radius} 0 0 1 0 -${2 * radius}`}
      style="stroke-dasharray: {dashArray};"
    />
  </svg>
</div>
