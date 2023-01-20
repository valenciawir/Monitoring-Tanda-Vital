<template>
  <div :class="decidePosition()" @click="$emit('click')">
    <svg
      :width="width"
      :height="height"
      fill="none"
      viewBox="0 0 39 77"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.488 76.7082C31.6725 76.7109 30.8668 76.531 30.13 76.1815C29.3933 75.832 28.7442 75.3219 28.2305 74.6886L1.86671 41.9386C1.06388 40.9619 0.625 39.7368 0.625 38.4725C0.625 37.2083 1.06388 35.9832 1.86671 35.0065L29.1584 2.2565C30.0849 1.14182 31.4162 0.440838 32.8595 0.307765C34.3029 0.174692 35.7399 0.62043 36.8546 1.54692C37.9693 2.47341 38.6703 3.80476 38.8034 5.24809C38.9364 6.69141 38.4907 8.12849 37.5642 9.24317L13.1655 38.4998L36.7455 67.7565C37.4129 68.5577 37.8369 69.5333 37.9672 70.568C38.0976 71.6026 37.9288 72.6529 37.4809 73.5946C37.0331 74.5363 36.3248 75.33 35.4399 75.8818C34.5551 76.4336 33.5307 76.7204 32.488 76.7082Z"
        :fill="fill"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "120",
    },
    height: {
      type: String,
      default: "120",
    },
    fill: {
      type: String,
      default: "#000",
    },
    position: {
      type: String,
      default: "up",
    },
  },
  methods: {
    decidePosition() {
      const className = "cursor-pointer";

      switch (this.position) {
        case "up":
          return `${className} rotate-90`;
        case "right":
          return `${className} rotate-180`;
        case "down":
          return `${className} -rotate-90`;
        case "left":
          return className;
      }
    },
  },
};
</script>
