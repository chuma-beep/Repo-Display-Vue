<template>
  <div>
    <!--search-->
    <div class="search">
      <fwb-input placeholder="search" v-model="input">
        <template #prefix>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </template>
      </fwb-input>
    </div>

    <div class="w-full flex justify-center mb-10">
      <fwb-pagination
        v-model="currentPage"
        :total-items="totalItems"
        @page-changed="handlePageChange"
        :layout="'navigation'"
      ></fwb-pagination>
    </div>

    <!--skeleton -->
    <div v-if="loading" class="flex flex-wrap justify-center mb-10">
      <div
        v-for="index in perPage"
        :key="index"
        class="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
      >
        <div class="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-md">
          <h5 class="mb-2 h-6 bg-gray-300 dark:bg-gray-700 rounded"></h5>
          <p class="h-4 bg-gray-300 dark:bg-gray-700 rounded"></p>
          <p class="h-4 mb-1 bg-gray-300 dark:bg-gray-700 rounded"></p>
          <p class="h-4 m-1 bg-gray-300 dark:bg-gray-700 rounded"></p>
          <p class="h-4 mb-1 bg-gray-300 dark:bg-gray-700 rounded"></p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center">
      <fwb-card
        v-for="repo in filteredAndPaginatedData"
        :key="repo.id"
        href="#"
        class="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
      >
        <RouterLink :to="`/repos/${repo.owner.login}/${repo.name}`">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ repo.name }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">
              {{ repo.description }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Language:</strong> {{ repo.language || 'N/A' }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Stars:</strong> {{ repo.stargazers_count }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Created At:</strong> {{ new Date(repo.created_at).toLocaleDateString() }}
            </p>
          </div>
        </RouterLink>
      </fwb-card>
    </div>
    <p v-if="error" class="text-red-500 w-full text-center">{{ error }}</p>
  </div>
</template>

<script>
import { FwbCard, FwbPagination, FwbInput } from 'flowbite-vue'
import { computed, watch, ref } from 'vue'

export default {
  name: 'RepoList',
  components: {
    FwbCard,
    FwbPagination,
    FwbInput
  },
  setup() {
    const data = ref([])
    const loading = ref(true)
    const error = ref(null)
    const currentPage = ref(1)
    const perPage = 9
    const input = ref('') // should be a string for search input

    const fetchData = () => {
      fetch('https://api.github.com/users/chuma-beep/repos')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((responseData) => {
          data.value = responseData
          paginateData()
        })
        .catch((err) => {
          error.value = 'Error fetching data: ' + err.message
          console.error(error.value)
        })
        .finally(() => {
          loading.value = false
        })
    }

    watch(currentPage, () => {
      paginateData()
    })

    const totalItems = computed(() => data.value.length)

    // Function to filter items based on the search input
    const filteredData = computed(() => {
      if (!input.value) {
        return data.value
      }
      return data.value.filter((repo) =>
        repo.name.toLowerCase().includes(input.value.toLowerCase())
      )
    })

    const paginateData = () => {
      const startIndex = (currentPage.value - 1) * perPage
      const endIndex = startIndex + perPage
      paginatedData.value = filteredData.value.slice(startIndex, endIndex)
    }

    const paginatedData = ref([])

    //watch changes in filteredData and currentPage
    watch([filteredData, currentPage], () => {
      paginateData()
    })

    const filteredAndPaginatedData = computed(() => {
      const startIndex = (currentPage.value - 1) * perPage
      const endIndex = startIndex + perPage
      return filteredData.value.slice(startIndex, endIndex)
    })

    const handlePageChange = (newPage) => {
      currentPage.value = newPage
    }

    fetchData()

    return {
      data,
      loading,
      error,
      currentPage,
      perPage,
      totalItems,
      filteredAndPaginatedData,
      handlePageChange,
      input
    }
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

.search {
  display: flex;
  justify-content: center;
  margin-bottom: 8vh;
}
</style>
