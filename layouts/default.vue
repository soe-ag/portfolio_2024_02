<script setup lang="ts">
const menuItems = ref([
  {
    label: "",
    icon: "i-material-symbols-home-rounded",
    route: "/",
  },
  {
    label: "",
    icon: "i-material-symbols-create-new-folder",
    route: "/works",
  },
]);

const route = useRoute();
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <div
    class="bg-slate-50 dark:bg-#040D12 min-h-100vh transition-colors duration-300"
  >
    <nav class="flex justify-end items-center p-2">
      <div class="flex gap-2 items-center">
        <!-- Dark Mode Toggle -->
        <ClientOnly>
          <button
            class="rounded-1 m-1 w-fit px-1 h-8 flex justify-center items-center gap-1 bg-transparent border-none cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Toggle Dark Mode"
            @click="toggleColorMode"
          >
            <div
              :class="
                colorMode.value === 'dark'
                  ? 'i-material-symbols-light-mode'
                  : 'i-material-symbols-dark-mode'
              "
              class="text-xl transition hover:scale-120"
            />
          </button>
        </ClientOnly>

        <div v-for="menu in menuItems" :key="menu.label">
          <NuxtLink
            :to="menu.route"
            :class="{
              'text-blue-500 dark:text-blue-400': route.path === menu.route,
              'text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400':
                route.path !== menu.route,
            }"
            class="no-underline rounded-1 w-fit px-1 h-8 flex justify-center items-center gap-1"
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
