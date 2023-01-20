<template>
  <div class="m-auto flex flex-col gap-10">
    <div
      class="flex items-center text-center text-[48px] font-semibold text-indigo"
    >
      <chevronIcon
        class="invisible lg:visible"
        width="30"
        height="30"
        position="left"
        @click="toLogin()"
      />
      <h1 class="w-full">REGISTER</h1>
    </div>
    <div class="flex flex-col gap-4">
      <Input
        :useIcon="true"
        name="username"
        placeholder="Username"
        @input="(e) => handleInput(e)"
      >
        <PersonIcon width="30" height="30" />
      </Input>
      <Input
        :useIcon="true"
        name="name"
        placeholder="name"
        @input="(e) => handleInput(e)"
      >
        <p>Abc</p>
      </Input>
      <Input
        :useIcon="true"
        name="nomor register"
        placeholder="Nomor Register"
        @input="(e) => handleInput(e)"
      >
        <PenIcon width="30" height="30" />
      </Input>
      <Input
        :useIcon="true"
        name="password"
        placeholder="Password"
        typeInput="password"
        @input="(e) => handleInput(e)"
      >
        <LockIcon width="30" height="30" />
      </Input>
      <Input
        :useIcon="true"
        name="confirm password"
        placeholder="Confirm Password"
        typeInput="password"
        @input="(e) => handleInput(e)"
      >
        <approvedIcon width="30" height="30" />
      </Input>
    </div>
    <div class="lg:flex lg:justify-center">
      <Button text="Sign Up" type="primary" @click="signUp()" />
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
import LockIcon from "@/assets/svg/lock-icon.vue";
import PersonIcon from "@/assets/svg/person-icon.vue";
import NameIcon from "@/assets/svg/name-icon.vue";
import approvedIcon from "@/assets/svg/approved-icon.vue";
import PenIcon from "@/assets/svg/pen-icon.vue";
import Button from "@/components/Button/Button.vue";
import { mapGetters, mapMutations } from "vuex";
import chevronIcon from "@/assets/svg/chevron-icon.vue";
import { formated } from "@/app/utils";

export default {
  name: "register-component",
  components: {
    Input,
    PersonIcon,
    NameIcon,
    LockIcon,
    Button,
    PenIcon,
    approvedIcon,
    chevronIcon,
  },
  data() {
    return {
      data: {
        username: "",
        password: "",
        name: "",
        nomorRegister: 0,
        confirmPassword: "",
      },
    };
  },
  computed: {
    ...mapGetters(["AUTH"]),
  },
  methods: {
    ...mapMutations(["toLogin"]),
    signUp() {
      localStorage.setItem("token", JSON.stringify(this.data));
      if (this.data.password === this.data.confirmPassword) {
        alert("success");
        return setTimeout(() => {
          this.toLogin();
        }, 1000);
      }
      return alert("password tidak cocok!");
    },
    handleInput(event) {
      this.data[formated(event.target.name)] = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
