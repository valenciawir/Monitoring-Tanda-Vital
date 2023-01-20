<template>
  <div class="fixed left-0 w-full">
    <div
      :class="[
        'absolute left-4 z-10 w-11/12 rounded-lg bg-[#FE2424] px-4 py-2 shadow-lg transition-top ease-in-out lg:left-[32%] lg:w-2/6',
        !show ? '-top-52' : 'top-0',
      ]"
    >
      <div
        class="flex items-center justify-center gap-10 text-sm text-white lg:text-xl"
      >
        <h1>
          Pasien {{ data.map((item) => item).join(", ") }} Perlu Tindakan!
        </h1>
        <div class="flex-end">
          <AlertIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertIcon from "@/assets/svg/alert-icon.vue";
export default {
  name: "alert-component",
  components: {
    AlertIcon,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
    },
  },
};
</script>
