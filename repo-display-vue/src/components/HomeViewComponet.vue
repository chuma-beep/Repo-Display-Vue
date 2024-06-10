<template>
    <div v-if="!state.apiData" class="flex flex-wrap justify-center mb-10">
      <div
        class="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-md p-4 md:p-12 w-full lg:w-3/5 mx-auto"
      >
        <div class="h-48 w-48 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto lg:mx-0"></div>
        <div class="lg:text-left">
          <div
            class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-gray-300 dark:bg-gray-700 bg-cover bg-center"
          ></div>
        </div>
        <h1 class="mb-2 h-6 bg-gray-300 dark:bg-gray-700 rounded mt-4"></h1>
        <p class="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2"></p>
        <p class="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2"></p>
        <p class="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2"></p>
        <p class="h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2"></p>
      </div>
    </div>
  
    <div v-else>
      <div class="max-w-4xl flex h-1/4 lg:h-1/2 flex-wrap mx-auto mb-32 mt-32 lg:mt-10 sm:mt-32">
        <div
          class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div class="p-4 md:p-12 text-center lg:text-left">
            <div
              class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              :style="{ backgroundImage: `url(${state.apiData.avatar_url})` }"
            ></div>
  
            <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{ state.apiData.name }}</h1>
            <div
              class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25 gap-4 mb-4"
            ></div>
  
            <p><strong>No Of Repos: </strong> {{ state.apiData.public_repos }}</p>
            <p><strong>Followers:</strong> {{ state.apiData.followers }}</p>
            <p><strong>Following:</strong> {{ state.apiData.following }}</p>
            <p class="pt-8 text-sm">
              {{ state.apiData.bio || '' }}
            </p>
          </div>
        </div>
  
        <div class="w-full lg:w-2/5">
          <img
            :src="state.apiData.avatar_url"
            class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfilePage',
    data() {
      return {
        state: {
          apiData: null
        }
      }
    },
    created() {
      fetch('https://api.github.com/users/chuma-beep')
        .then((response) => response.json())
        .then((data) => {
          this.state.apiData = data
        })
    }
  }
  </script>
  
  <style scoped>
  @keyframes skeleton-pulse {
    0% {
      background-color: rgba(209, 213, 219, 0.5);
    }
    50% {
      background-color: rgba(209, 213, 219, 1);
    }
    100% {
      background-color: rgba(209, 213, 219, 0.5);
    }
  }
  .animate-pulse {
    animation: skeleton-pulse 1.5s infinite;
  }
  </style>
  