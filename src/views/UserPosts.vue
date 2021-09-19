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
    <h1>{{ posts.length }} Post{{ posts.length === 1 ? "" : "s" }}</h1>
    <div class="list-group">
      <router-link
        class="list-group-item list-group-item-action"
        :to="`/posts/${post.id}`"
        v-for="post in posts"
        :key="post.id"
      >
        {{ post.title }}
      </router-link>
    </div>
  </div>
</template>
