<template>
  <div class="m-auto w-10/12 p-0 pb-10 lg:w-6/12 lg:pr-10">
    <div
      v-if="AUTH === 'login'"
      class="mt-10 border-t-2 pt-4 lg:m-0 lg:border-none lg:p-0"
    >
      <Login />
    </div>
    <div v-else>
      <Register />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Login from "../components/Login/Login.vue";
import Register from "../components/Register/Register.vue";

export default {
  name: "form",
  components: {
    Login,
    Register,
  },
  computed: {
    ...mapGetters(["AUTH"]),
  },

  watch: {
    AUTH: {
      deep: true,
      handler(val) {
        console.log(val);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
