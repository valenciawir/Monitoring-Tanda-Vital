<template>
  <div
    @click="$emit('click')"
    :id="id"
    :class="[
      'cursor-pointer rounded-xl text-center text-white',
      decideBackground()[0],
    ]"
  >
    <div :class="['rounded-t-xl py-4', decideBackground()[1]]">
      <h1>Pasien {{ patient }}</h1>
    </div>
    <div class="flex flex-col gap-4 py-4 px-6 text-left text-black">
      <span>name: {{ name }}</span>
      <span>No Registrasi: {{ registration }}</span>
    </div>
    <div class="grid grid-cols-4 grid-rows-3 gap-y-4 pb-6">
      <HeartIcon
        :width="width"
        :height="height"
        class="col-start-1 row-start-1 m-auto"
      />
      <LungsIcon
        :width="width"
        :height="height"
        class="col-start-1 row-start-2 m-auto"
      />
      <OxygenIcon
        :width="width"
        :height="height"
        class="col-start-3 row-start-1 m-auto"
      />
      <BloodPressureIcon
        :width="width"
        :height="height"
        class="col-start-1 row-start-3 m-auto"
      />
      <TemperatureIcon
        :width="width"
        :height="height"
        class="col-start-3 row-start-2 m-auto"
      />
      <!-- right -->
      <span
        class="col-start-2 row-start-1 flex items-center justify-start text-xl font-semibold text-black"
      >
        {{ heart }} <span class="ml-1 text-sm">beats</span>
      </span>
      <span
        class="col-start-2 row-start-2 flex items-center justify-start text-xl font-semibold text-black"
      >
        {{ lungs }} <span class="ml-1 text-sm">breaths</span>
      </span>
      <span
        class="col-span-3 col-start-2 row-start-3 flex items-center justify-start text-lg font-semibold text-black"
      >
        {{ sistole }} / {{ diastole }} <span class="ml-1 text-sm">mmHG</span>
      </span>

      <!-- left -->
      <span
        class="flex items-center justify-start text-xl font-semibold text-black"
      >
        {{ oxygen }} <span class="ml-1 text-sm">%</span>
      </span>
      <span
        class="flex items-center justify-start text-xl font-semibold text-black"
      >
        {{ temperature }} <span>&#8451;</span>
      </span>
    </div>
  </div>
</template>

<script>
import HeartIcon from "@/assets/svg/heart-icon.vue";
import LungsIcon from "@/assets/svg/lungs-icon.vue";
import OxygenIcon from "@/assets/svg/oxygen-icon.vue";
import BloodPressureIcon from "@/assets/svg/blood-pressure-icon.vue";
import TemperatureIcon from "@/assets/svg/temperature-icon.vue";

export default {
  name: "card-component",
  component: {
    HeartIcon,
    LungsIcon,
    OxygenIcon,
    BloodPressureIcon,
    TemperatureIcon,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "normal",
    },
    width: {
      type: String,
      default: "20",
    },
    height: {
      type: String,
      default: "20",
    },
    heart: {
      type: Number,
      default: 0,
    },
    lungs: {
      type: Number,
      default: 0,
    },
    oxygen: {
      type: Number,
      default: 0,
    },
    sistole: {
      type: Number,
      default: 0,
    },
    diastole: {
      type: Number,
      default: 0,
    },
    temperature: {
      type: Number,
      default: 0,
    },
    patient: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: 0,
    },
    registration: {
      type: Number,
      default: 0,
    },
  },
  components: {
    HeartIcon,
    LungsIcon,
    OxygenIcon,
    BloodPressureIcon,
    TemperatureIcon,
  },
  methods: {
    decideBackground() {
      if (this.type === "normal") {
        return ["bg-[#64E059]", "bg-[#2B7B24]"];
      }
      if (this.type === "danger") {
        return ["bg-[#FE2424]", "bg-[#7B0D0D]"];
      }
      if (this.type === "warning") {
        return ["bg-[#F5EE3A]", "bg-[#958F00]"];
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
