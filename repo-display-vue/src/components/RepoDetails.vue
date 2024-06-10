<template>
  <div class="align-middle mid">
    <FwbCard class="post align-middle p-5">
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
      <div v-if="post" class="content">
        <h2 class="mb-2 font-bold tracking-tight text-gray-900">
          <strong class="text-xl">Repo Name: </strong>{{ post.name }}
        </h2>
        <p>{{ post.description }}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">
          <strong>Stars:</strong> {{ post.stargazers_count }}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">
          <strong>Forks:</strong> {{ post.forks_count }}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">
          {{ post.description }}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400 mb-1">
          <strong>Language:</strong> {{ post.language || 'N/A' }}
        </p>

        <p class="font-normal text-gray-700 dark:text-gray-400 mb-1">
          <strong>Created At:</strong> {{ new Date(post.created_at).toLocaleDateString() }}
        </p>

        <a :href="post.html_url" target="_blank" class="text-blue-500 hover:underline">
          View on GitHub
        </a>
        <div class="mt-4">
          <fwb-button color="default" @click="goBack">Go Back</fwb-button>
        </div>
      </div>
    </FwbCard>
  </div>
</template>

<script setup>
import { FwbCard, FwbButton } from 'flowbite-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<script>
import { getDetails } from '@/apis/api'

export default {
  props: ['owner', 'repoName'],
  data() {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  watch: {
    '$route.params': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    async fetchData() {
      this.error = this.post = null
      this.loading = true

      try {
        const owner = this.$route.params.owner // Ensure you have these params in the route
        const repoName = this.$route.params.repoName
        this.post = await getDetails(owner, repoName)
      } catch (err) {
        this.error = `Failed to load repository details: ${err.message}`
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
.mid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}
</style>
