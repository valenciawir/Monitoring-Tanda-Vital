<template>
  <div class="m-auto flex flex-col gap-10">
    <div class="text-center text-[48px] font-semibold text-indigo">
      <h1>USER LOGIN</h1>
    </div>

    <Input
      :useIcon="true"
      name="username"
      placeholder="username"
      @input="(e) => handleInput(e)"
    >
      <PersonIcon width="30" height="30" />
    </Input>

    <Input
      :useIcon="true"
      name="password"
      placeholder="password"
      typeInput="password"
      @input="(e) => handleInput(e)"
    >
      <LockIcon width="30" height="30" />
    </Input>

    <div class="flex w-full justify-start gap-2">
      <input type="radio" />
      <span>Remember Me</span>
    </div>
    <div class="lg:flex lg:justify-center">
      <Button text="Login" type="primary" @click="handleClick(e)" />
    </div>
    <div class="flex flex-row justify-center gap-2 text-center">
      <p>Doesn’t have an account?</p>
      <span @click="toRegister()" class="cursor-pointer text-originBlue"
        >Click here</span
      >
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
import LockIcon from "@/assets/svg/lock-icon.vue";
import PersonIcon from "@/assets/svg/person-icon.vue";
import Button from "@/components/Button/Button.vue";
import { mapMutations } from "vuex";

export default {
  name: "login-component",
  components: {
    Input,
    PersonIcon,
    LockIcon,
    Button,
  },
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(["toRegister"]),
    handleClick() {
      const auth = this.authentication(this.data.username, this.data.password);
      if (auth === true) {
        localStorage.setItem("auth", "true");
        this.$router.push("/dashboard");
      } else {
        alert(auth);
      }
    },
    handleInput(event) {
      this.data[event.target.name] = event.target.value;
    },
    authentication(username, password) {
      const data = JSON.parse(localStorage.getItem("token"));
      console.log(data);
      if (data) {
        if (data.username === username && data.password === password) {
          return true;
        }
        if (data.username === username && data.password !== password) {
          return "password salah silahkan coba lagi!";
        }
        if (data.username !== username && data.password === password) {
          return "username salah silahkan coba lagi!";
        }
      }
      return "username dan password salah silahkan registrasi terlebih dahulu!";
    },
  },
};
</script>

<style lang="scss" scoped></style>
