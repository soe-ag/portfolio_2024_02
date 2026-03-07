<script setup lang="ts">
console.log(
  "https://www.flaticon.com/free-icons/code",
  " Code icons created by meaicon - Flaticon",
);
</script>
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    class="text-gray-300 bg-#040D12 flex justify-center items-center h-auto lg:h-90vh px-6 py-2 lg:p-8"
  >
    <div class="grid lg:grid-cols-2 gap-1">
      <div class="m-4 p-2 flex justify-start lg:justify-center items-center">
        <div
          class="flex-col flex gap-2 p-2 lg:p-4 lg:px-20 text-xl lg:text-2xl font-semibold"
        >
          <div class="flex gap-4 items-center">
            <p>SOE AUNG</p>
            <NuxtLink :to="'https://github.com/soe-ag'" target="_blank">
              <div
                class="i-simple-icons-github text-white text-xl transition hover:scale-120 hover:-rotate-10"
              />
            </NuxtLink>

            <NuxtLink
              :to="'https://www.linkedin.com/in/soe-aung-072a30129/'"
              target="_blank"
            >
              <div
                class="i-simple-icons-linkedin text-#0077b5 text-xl transition hover:scale-120 hover:-rotate-10"
              />
            </NuxtLink>
          </div>
          <p>Frontend Developer</p>
          <p class="text-gray-500 text-base">
            Build functional and visually appealing responsive web applications
            <br />
            that bring ideas to life.
          </p>
        </div>
      </div>

      <!-- <div class="m-2 p-2">

      </div> -->
      <div
        class="scroll-auto maincon m-auto w-fit h-auto lg:max-w-200 lg:h-180 flex flex-col gap-8 lg:gap-2 lg:snap-y lg:snap-mandatory lg:overflow-auto"
      >
        <!-- <div
        class="scroll-smooth maincon m-auto w-fit h-fit lg:w-200 lg:h-200 flex flex-col gap-8 lg:gap-2 lg:flex-row lg:snap-x lg:snap-mandatory lg:overflow-x-scroll"
      > -->
        <section
          class="subsection p-4 flex-none basis-full flex justify-center items-center snap-start text-base lg:text-lg w-auto md:w-150 lg:w-auto md:m-auto"
        >
          <div class="px-2 sm:px-4 md:px-6 lg:px-8 py-2 flex-1">
            <div class="text-gray-300 align-middle">
              Frontend engineer skilled in JavaScript, TypeScript, and hands-on
              experience with frameworks like
              <div class="i-logos-vue inline-block text-base"></div>
              <div class="i-logos-react inline-block text-base ml-1"></div>
              and
              <div class="i-logos-nuxt-icon inline-block text-base ml-1"></div>
              <div
                class="i-logos-nextjs-icon inline-block text-base ml-1"
              ></div>
              . With a master’s degree in engineering, I bring a detail-oriented
              approach and unique perspectives to development. <br /><br /><span
                class="hidden lg:inline-block"
                >Enjoy creating user-friendly, visually appealing websites and
                applications that bring ideas to life. With a good design sense,
                I focus on crafting interfaces that are both functional and
                enjoyable for users.<br /><br
              /></span>
              In addition to web development, I have an interest in 3D modeling,
              blockchain, and AI, and I enjoy finding practical ways to
              integrate emerging technologies into modern digital experiences.
            </div>
          </div>
          <div class="hidden lg:block w-10">
            <div
              class="i-material-symbols-arrow-cool-down-rounded text-2xl animate-bounce"
            ></div>
          </div>
        </section>
        <section
          id="section2"
          class="subsection p-4 flex-none basis-full flex justify-center gap-4 items-center snap-start text-sm lg:text-base m-auto"
        >
          <div class="flex flex-col gap-6 justify-evenly flex-1">
            <!-- <p>Experiences</p> -->
            <div class="m-1">
              <div class="flex gap-2 items-center">
                <!-- <div class="i-material-symbols-code text-blue-400"></div> -->
                <NuxtImg src="/images/code.png" class="w-5 h-5" />

                <p class="text-base font-semibold lg:text-xl">
                  Frontend Developer @MyNavi/ 444 Co.Ltd (MyNavi Subsidiary)
                </p>
              </div>

              <p class="text-sm lg:text-base text-gray-500 font-semibold ml-7">
                2025 April - <span class="underline">Present</span>
              </p>
              <ul class="ml-7 my-2 lg:list-none">
                <li>Contributed Locus Platform.</li>
                <li>
                  Working on new features which include field study events and
                  company lectures.
                </li>
                <li>Built and test components and features.</li>
              </ul>
              <div class="flex gap-3 text-xl ml-7 mb-4">
                <div class="i-logos-react"></div>
                <div class="i-logos-nextjs-icon"></div>
                <div class="i-logos-typescript-icon"></div>
                <div class="i-logos-pandacss-icon"></div>
                <div class="i-logos-figma"></div>
              </div>

              <p class="text-sm lg:text-base text-gray-500 font-semibold ml-7">
                2023 July - 2025 March
              </p>
              <ul class="ml-7 my-2 lg:list-none">
                <li>
                  Migrated Vue2 to Vue3/Nuxt3, enhancing performance and
                  maintainability.
                </li>
                <li>
                  Implemented multilingual support with i18n and responsive user
                  interfaces.
                </li>
                <li>
                  Built shared components through Story (Historie) testing.
                </li>
                <li>
                  Resolved feature bugs and carried out new features
                  implementation.
                </li>
              </ul>

              <div class="flex gap-3 text-xl ml-7">
                <div class="i-logos-vue"></div>
                <div class="i-logos-nuxt-icon"></div>
                <div class="i-logos-typescript-icon"></div>
                <div class="i-logos-unocss"></div>
                <div class="i-logos-figma"></div>
              </div>
            </div>
            <div class="m-1">
              <div class="flex gap-2 items-center">
                <!-- <div class="i-material-symbols-code text-blue-400"></div> -->
                <NuxtImg src="/images/code.png" class="w-5 h-5" />

                <p class="text-base font-semibold lg:text-xl">
                  Frontend Developer @Egodiva
                </p>
              </div>
              <p class="text-sm lg:text-base text-gray-500 font-semibold ml-7">
                2022 Aug - 2023 May
              </p>

              <ul class="ml-7 my-2 lg:list-none">
                <li>
                  Developd landing pages that align with the design mock-ups.
                </li>
                <li>
                  Created visually compelling websites to meet the client's
                  marketing goals.
                </li>
                <li>
                  Updated websites according to marketing campaign and SEO
                  standards.
                </li>
              </ul>
              <div class="flex gap-3 text-xl ml-7">
                <div class="i-logos-javascript"></div>
                <div class="i-logos-sass"></div>
                <div class="i-logos-wordpress-icon"></div>
                <div class="i-logos-figma"></div>
              </div>
            </div>
          </div>
          <!-- <div class="hidden lg:block w-10">
            <div
              class="i-material-symbols-arrow-cool-down-rounded text-2xl animate-bounce"
            ></div>
          </div> -->
        </section>
        <!-- <div id="section4" class="subsection">Section 4</div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .maincon { */
/* overflow: hidden;  Hide overflow content */
/* display: flex; Flex layout for horizontal alignment */
/* scroll-snap-type: x mandatory; Enable horizontal snap scrolling */
/* overflow-x: scroll; Horizontal scroll enabled */
/* scrollbar-width: none; Hide scrollbar (Firefox) */
/* } */

.maincon::-webkit-scrollbar {
  display: none; /* Hide scrollbar (WebKit) */
}

/* .subsection { */
/* flex: 0 0 100%; Each section takes 100% of the maincon's width */
/* height: 100%; */
/* display: flex;
  align-items: center;
  justify-content: center; */
/* background-color: lightblue; */
/* scroll-snap-align: start; Snap each section to the start of the maincon */
/* border: 1px solid #555; */
/* } */

section {
  /* border: 1px solid red; */
}
</style>
