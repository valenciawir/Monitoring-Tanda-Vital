<template>
  <div
    :class="[
      'rounded-md border bg-white py-2 px-4 shadow-sm',
      !isError ? 'border-gray-300' : 'border-2 border-red-500',
    ]"
  >
    <div class="flex items-center gap-3">
      <div v-if="useIcon">
        <slot></slot>
      </div>
      <div>
        <input
          :type="typeInput"
          class="w-full focus:outline-none"
          :name="name"
          id="input-component"
          autocomplete="off"
          :placeholder="placeholder"
          @input="(e) => $emit('input', e)"
          @focus="(e) => $emit('focus', e)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LockIcon from "@/assets/svg/lock-icon.vue";

export default {
  name: "Input",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "icon",
    },
    placeholder: {
      type: String,
      default: "",
    },
    useIcon: {
      type: Boolean,
      default: false,
      required: true,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "username",
    },
    typeInput: {
      type: String,
      default: "",
    },
  },
  components: {
    LockIcon,
  },
};
</script>

<style lang="scss" scoped></style>
