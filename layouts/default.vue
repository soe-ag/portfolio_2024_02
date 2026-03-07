<script setup lang="ts">
const menuItems = ref([
  {
    label: "",
    icon: "i-material-symbols-home-rounded",
    route: "/",
  },

  // {
  //   label: "About",
  //   icon: "i-material-symbols-save-rounded",
  //   route: "/about",
  // },
  {
    label: "",
    icon: "i-material-symbols-create-new-folder",
    route: "/works",
  },
  // {
  //   label: "Others",
  //   icon: "i-material-symbols-movie-filter",
  //   route: "/others",
  // },
]);

const route = useRoute();
</script>

<template>
  <div class="bg-#040D12 min-h-100vh">
    <nav class="flex justify-end items-center p-1">
      <div class="col-span-4 flex gap-2">
        <div v-for="menu in menuItems" :key="menu.label">
          <NuxtLink
            :to="menu.route"
            :class="{
              'text-blue-4 ': route.path === menu.route,
              'text-white hover:text-blue-4': route.path !== menu.route,
            }"
            class="no-underline rounded-1 m-1 w-fit px-1 h-8 flex justify-center items-center gap-1"
          >
            <div
              :class="menu.icon"
              class="text-xl transition hover:scale-120"
            />
            <div class="">{{ menu.label }}</div>
          </NuxtLink>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
