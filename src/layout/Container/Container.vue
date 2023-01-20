<template>
  <div class="flex gap-4">
    <Sidebar/>
    <main class="w-full p-4 lg:p-10">
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/layout/Sidebar/Sidebar.vue";
export default {
  name: "dashboard-page",
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped></style>
