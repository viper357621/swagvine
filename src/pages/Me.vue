<script setup>

import { useUserStore } from '../store/useUserStore'

const user = useUserStore();
</script>

<template>
  <div v-if="user">
    {{user.data.email}}
    <!-- <div>Hello {{ user.user_metadata.name }}</div> -->
  </div>
</template>