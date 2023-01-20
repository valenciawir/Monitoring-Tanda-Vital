<template>
  <div>
    <svg
      :width="width"
      :height="height"
      fill="none"
      viewBox="0 0 36 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2372 26.2916C22.0003 27.9334 19.7605 29.1315 18.0001 29.7165C12.4584 27.875 2.16675 19.9583 2.16675 11.25C2.16675 6.44051 6.0656 2.54163 10.8751 2.54163C13.8203 2.54163 16.4241 4.00376 18.0001 6.24172C19.5761 4.00376 22.1798 2.54163 25.1251 2.54163C29.9345 2.54163 33.8334 6.44051 33.8334 11.25C33.8334 12.6326 33.574 13.9952 33.1153 15.3168"
        :stroke="fill"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.375 19.9583H23.5417L25.9167 16.7916L28.2917 23.125L30.637 19.9583H33.8333"
        :stroke="fill"
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
