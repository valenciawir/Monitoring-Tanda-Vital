<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 51 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_337_6)">
        <path
          d="M25.5001 23.375C27.1812 23.375 28.8246 22.8765 30.2224 21.9425C31.6202 21.0085 32.7097 19.681 33.353 18.1278C33.9964 16.5746 34.1647 14.8656 33.8367 13.2167C33.5088 11.5679 32.6992 10.0533 31.5105 8.8646C30.3217 7.67585 28.8072 6.8663 27.1583 6.53833C25.5095 6.21035 23.8004 6.37868 22.2473 7.02203C20.6941 7.66537 19.3666 8.75484 18.4326 10.1527C17.4986 11.5505 17.0001 13.1939 17.0001 14.875C17.0001 17.1293 17.8956 19.2914 19.4897 20.8854C21.0837 22.4795 23.2457 23.375 25.5001 23.375Z"
          :fill="fill"
        />
        <path
          d="M38.2501 44.625C38.8136 44.625 39.3541 44.4011 39.7527 44.0026C40.1512 43.6041 40.3751 43.0636 40.3751 42.5C40.3751 38.5549 38.8079 34.7714 36.0183 31.9818C33.2287 29.1922 29.4452 27.625 25.5001 27.625C21.555 27.625 17.7715 29.1922 14.9818 31.9818C12.1922 34.7714 10.6251 38.5549 10.6251 42.5C10.6251 43.0636 10.8489 43.6041 11.2475 44.0026C11.646 44.4011 12.1865 44.625 12.7501 44.625H38.2501Z"
          :fill="fill"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_337_6"
          x="6.62506"
          y="6.375"
          width="37.75"
          height="46.25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_337_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_337_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "53",
    },
    height: {
      type: String,
      default: "53",
    },
    fill: {
      type: String,
      default: "#231F20",
    },
  },
};
</script>
