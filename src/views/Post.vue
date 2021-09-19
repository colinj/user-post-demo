<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useStore } from "vuex";
import { Post } from "@/typings";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const postId = computed(() => (props ? parseInt(props.id) : 0));

    const store = useStore();
    const post = computed(() => store.state.post as Post);
    const comments = computed(() => store.state.postComments as Array<Comment>);

    watch(
      postId,
      () => {
        store.dispatch("getPost", postId.value);
        store.dispatch("getComments", postId.value);
      },
      {
        immediate: true,
      }
    );

    return {
      post,
      comments,
    };
  },
});
</script>

<template>
  <div>
    <div class="post">
      <div>{{ post.title }}</div>
      <div>{{ post.body }}</div>
    </div>
    <hr />
    <div v-for="comment in comments" :key="comment.id">
      <div>{{ comment.email }}</div>
      <div>{{ comment.body }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
