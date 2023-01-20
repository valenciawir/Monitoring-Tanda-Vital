<template>
  <div>
    <svg
      :width="width"
      :height="height"
      fill="none"
      viewBox="0 0 39 35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5835 17.0888C14.3337 13.0624 13.3306 10.9776 11.574 10.8344C8.73763 10.6031 4.38997 15.0132 3.10103 21.2111C1.81209 27.409 2.44859 31.8485 4.13519 32.1482C5.82178 32.448 8.27245 30.7016 9.43514 30.7016C10.5978 30.7016 14.6276 31.5471 14.6276 30.0157C14.6276 29.2612 14.6276 27.43 14.6276 23.4321"
        stroke="black"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
      />
      <path
        d="M24.3034 17.1763C24.5441 13.0926 25.5491 10.9787 27.3183 10.8344C30.1547 10.6031 34.5023 15.0132 35.7913 21.2111C37.0802 27.409 36.4437 31.8485 34.7571 32.1482C33.0705 32.448 30.6198 30.7016 29.4572 30.7016C28.2945 30.7016 24.2646 31.5471 24.2646 30.0157C24.2646 29.2629 24.2646 27.4134 24.2646 23.4321"
        stroke="black"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
      />
      <path
        d="M16.5579 3.0625V15.1773C16.5207 17.0392 14.8874 17.9701 11.6581 17.9701"
        stroke="black"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
      />
      <path
        d="M22.3119 3.0625V15.1773C22.349 17.0392 23.9823 17.9701 27.2116 17.9701"
        stroke="black"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
      />
      <path
        d="M11.8125 23.4321C15.191 23.4321 17.7535 22.6689 19.5 21.1426C21.2591 22.6689 23.8298 23.4321 27.2119 23.4321"
        stroke="black"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
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
    strokeWidth: {
      type: String,
      default: "4",
    },
  },
};
</script>

<style lang="scss" scoped></style>
