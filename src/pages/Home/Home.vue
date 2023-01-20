<template>
  <div class="max-w-[1440px]">
    <div
      class="text-saphire mb-8 flex items-center justify-center gap-4 text-center text-xl font-semibold text-sapphire lg:relative lg:inline lg:text-left"
    >
      <ChevronIcon
        v-if="AUTH === 'register'"
        class="initial lg:hidden"
        width="20"
        height="20"
        position="left"
        @click="toLogin()"
      />
      <h1 class="py-12 lg:px-11">Patient Vital Sign Monitoring</h1>
    </div>
    <div
      :class="[
        'w-4xl h-[80vh] justify-end bg-no-repeat hover:bg-[10%] lg:flex',
        // AUTH === 'login' ? 'bg-docktorIllustration' : 'bg-nurseIllustration',
      ]"
    >
      <div class="block w-[100vw]">
        <img
          :src="AUTH === 'login' ? DocktorIllustration : NurseIllustration"
          alt=""
          class="w-auto"
        />
      </div>
      <Form />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Form from "./Form/Form.vue";
import DocktorIllustration from "@/assets/images/docktor-illustration.png";
import NurseIllustration from "@/assets/images/nurse-illustration.png";
import ChevronIcon from "@/assets/svg/chevron-icon.vue";

export default {
  name: "login-page",
  components: {
    Form,
    ChevronIcon,
  },
  data() {
    return {
      DocktorIllustration,
      NurseIllustration,
    };
  },
  computed: {
    ...mapGetters(["AUTH"]),
  },
  methods: {
    ...mapMutations(["toLogin"]),
  },
};
</script>

<style lang="scss" scoped></style>
