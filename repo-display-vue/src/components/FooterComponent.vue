<template>
  <div class="py-6 px-4 md:flex md:items-center md:justify-between bg-white">
    <FwbFooter class="w-full">
      <FwbFooterCopyright by="DevWisdom™" class="text-sm text-black sm:text-center" href="/" />
      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <FwbFooterIcon href="/" sr-text="Discord community" class="hover:text-blue-700">
          <svg
            aria-hidden="true"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 21 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
            />
          </svg>
        </FwbFooterIcon>
        <FwbFooterIcon href="/" sr-text="Twitter page" class="hover:text-blue-700">
          <svg
            aria-hidden="true"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
              fill-rule="evenodd"
            />
          </svg>
        </FwbFooterIcon>
        <FwbFooterIcon href="/" sr-text="GitHub account" class="hover:text-blue-700">
          <svg
            aria-hidden="true"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              fill-rule="evenodd"
            />
          </svg>
        </FwbFooterIcon>
        <FwbFooterIcon
          href="https://mail.google.com"
          sr-text="Gmail account"
          class="hover:text-blue-700"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4v12h16V4H2zm14.5 2L10 11 3.5 6H16.5zM3 5h14l-7 5L3 5zm14 10H3V7.5l7 5 7-5V15z"
            />
          </svg>
        </FwbFooterIcon>
      </div>
    </FwbFooter>
  </div>
</template>

<script setup>
import { FwbFooter, FwbFooterCopyright, FwbFooterIcon } from 'flowbite-vue'
</script>
