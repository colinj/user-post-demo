<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useStore } from "vuex";
import { User, Post } from "@/typings";

export default defineComponent({
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user as User);
    const posts = computed(() => store.state.posts as Array<Post>);

    watch(user, () => store.dispatch("getPosts", user.value.id), {
      immediate: true,
    });

    return {
      posts,
    };
  },
});
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>
