<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { User } from "@/typings";

export default defineComponent({
  setup() {
    const userId = 3;
    const store = useStore();
    const user = computed(() => store.state.user as User);

    store.dispatch("getUser", userId);

    return {
      user,
    };
  },
});
</script>

<template>
  <div v-if="user.name">
    <h2>Hello {{ user.name }}</h2>
  </div>
  <div v-else>Loading...</div>
</template>
