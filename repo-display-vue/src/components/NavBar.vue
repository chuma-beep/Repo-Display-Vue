<template>
  <div class="lg:mb-32">
    <fwb-navbar class="shadow-lg fixed w-full z-10 top-0">
      <template #logo>
        <fwb-navbar-logo alt="logo" image-url="src/assets/favicon.png" link="#">
          <RouterLink to="/">DevWisdom</RouterLink>
        </fwb-navbar-logo>
      </template>
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link>
            <RouterLink to="/:notFound">404 Page</RouterLink>
          </fwb-navbar-link>
          <fwb-navbar-link> Error boundary </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
      <template #menu-icon>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </template>
    </fwb-navbar>
  </div>
</template>

<script setup>
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo } from 'flowbite-vue'
import { RouterLink } from 'vue-router'
</script>
