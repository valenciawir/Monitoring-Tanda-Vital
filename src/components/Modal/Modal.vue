<template>
  <div
    v-if="openModal"
    class="fixed top-0 left-0 h-screen w-full bg-[rgb(0,0,0,0.3)]"
  >
    <div :class="['fixed right-0 w-full']">
      <div
        :class="[
          'absolute top-40 right-8 w-10/12 rounded-md bg-white pb-4 font-semibold md:right-16 lg:right-[40%] lg:w-3/12',
        ]"
      >
        <div class="flex flex-col gap-4">
          <div
            :class="['rounded-t-md py-4 px-6 text-white', `bg-[${bgTitle}]`]"
          >
            <h1>{{ title }}</h1>
          </div>
          <div class="px-6 text-sm font-semibold text-gray-800 lg:text-lg">
            <p>{{ description }}</p>
          </div>

          <div v-if="useFooter" class="border-t-2 p-4">
            <slot></slot>
          </div>
          <div
            v-if="useModalConfirmation"
            class="flex justify-end gap-4 pr-4 font-semibold text-white"
          >
            <Button
              :text="negative"
              :resetClass="true"
              customClass="py-2 px-8 bg-red-600 rounded-md cursor-pointer"
              @click="$emit('onNegative')"
            />
            <Button
              :text="positive"
              :resetClass="true"
              customClass="py-2 px-8 bg-green-600 rounded-md cursor-pointer"
              @click="(e) => $emit('onPositive', e)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";

export default {
  name: "modal-component",
  components: {
    Button,
  },
  props: {
    bgTitle: {
      type: String,
      default: "#7B0D0D",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    useFooter: {
      type: Boolean,
      default: false,
    },
    useModalConfirmation: {
      type: Boolean,
      default: false,
    },
    negative: {
      type: String,
      default: "Cancel",
    },
    positive: {
      type: String,
      default: "Oke",
    },
    openModal: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
      defaut: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
