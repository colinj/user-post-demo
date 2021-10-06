<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { User, Post } from "@/typings";

export default defineComponent({
  setup() {
    const userId = 3;
    const store = useStore();
    const user = computed(() => store.state.user as User);
    const posts = computed(() => store.state.posts as Array<Post>);

    store.dispatch("getUser", userId);
    store.dispatch("getPosts", userId);

    return {
      user,
      posts,
    };
  },
});
</script>

<template>
  <div v-if="user.name" class="relative">
    <h2>Hello {{ user.name }}</h2>
    <hr />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" class="full-width" />
      </transition>
    </router-view>
  </div>
  <div v-else>Loading...</div>
</template>
