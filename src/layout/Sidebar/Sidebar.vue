<template>
  <div
    :class="[
      'flex w-full fixed gap-4 lg:h-auto h-full text-white transition-margin delay-200 duration-500 ease-in-out lg:relative lg:w-[400px]',
      isActive ? '' : '-ml-[2000px] lg:-ml-[265px]',
    ]"
  >
    <div
      class="flex h-full w-full  flex-col items-center justify-between bg-sapphire p-0 lg:w-10/12 lg:pb-6"
    >
      <div
        class="center mt-8 flex h-full flex-col justify-around lg:m-0 lg:h-4/6"
      >
        <div class="mt-2 text-2xl">
          <h1 class="mb-2 text-center font-semibold">
            Patient Vital Sign Monitoring
          </h1>
          <hr class="m-auto w-6/12" />
        </div>
        <div class="flex flex-col gap-4 text-center">
          <div
            class="m-auto flex w-6/12 items-center justify-center rounded-full bg-gray-300 py-8 shadow-xl lg:w-8/12"
          >
            <PersonIcon width="100" height="100" />
          </div>
          <h1 class="text-4xl">{{nama}}</h1>
          <p class="text-xl">Tenaga Medis</p>
        </div>
        <div>
          <ul class="flex flex-col justify-center gap-4 text-xl font-semibold">
            <li
              v-for="(item, index) in menu"
              :key="index"
              :id="`list-${index}`"
              @click="activeNavigation(index)"
              class="relative flex cursor-pointer items-center gap-14 overflow-hidden px-4 py-2 hover:bg-black/30"
            >
              <component
                :is="item.icon"
                width="30"
                height="30"
                fill="#fff"
                :class="[{ 'right-2 lg:absolute': !isActive }]"
              />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="relative flex cursor-pointer gap-8 py-2 px-4 font-semibold hover:bg-black/30"
        @click="logout()"
      >
        <logoutIcon
          width="30"
          height="30"
          :class="[{ 'right-2 top-1 lg:absolute': !isActive }]"
          fill="#fff"
        />
        <span>Log Out</span>
      </div>
    </div>
    <div
      @click="handleClickNav()"
      :class="[
        'fixed top-0 mt-4 cursor-pointer space-y-2 lg:static',
        isActive ? 'right-2' : 'left-10 lg:-right-12',
      ]"
    >
      <div class="h-0.5 w-10 bg-black lg:bg-gray-600"></div>
      <div
        :class="[
          'transition-slowest ease h-0.5 transform bg-black transition-width duration-1000 lg:bg-gray-600',
          isActive ? 'w-6' : 'w-10',
        ]"
      ></div>
      <div
        :class="[
          'transition-slowest ease h-0.5 transform bg-black transition-width duration-1000 lg:bg-gray-600',
          isActive ? 'w-3' : 'w-10',
        ]"
      ></div>
    </div>
  </div>
</template>

<script>
import HomeIcon from "@/assets/svg/home-icon.vue";
import PersonIcon from "@/assets/svg/person-icon.vue";
import logoutIcon from "@/assets/svg/logout-icon.vue";
import { menu } from "./app/constant";

export default {
  name: "sidebar-layout",
  components: {
    PersonIcon,
    HomeIcon,
    logoutIcon,
  },
  data() {
    return {
      menu,
      isActive: false,
      nama: "",
    };
  },
  methods: {
    handleClickNav() {
      this.isActive = !this.isActive;
    },
    activeNavigation(index) {
      const el = document.querySelector(`#list-${index}`);
      // add active
      el.classList.add("bg-black/30");

      for (let i = 0; i < menu.length; i++) {
        if (i !== index) {
          document.querySelector(`#list-${i}`).classList.remove("bg-black/30");
        }
      }
    },
    logout() {
      // localStorage.clear("token");
      this.$router.push("/");
    },
  },
  created(){
    const data = JSON.parse(localStorage.getItem("token"));
    this.nama = data["name"]
  }
};
</script>

<style lang="scss" scoped></style>
