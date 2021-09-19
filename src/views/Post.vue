<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useStore } from "vuex";
import { Post } from "@/typings";
import PostCard from "@/components/PostCard.vue";
import CommentCard from "@/components/CommentCard.vue";

export default defineComponent({
  components: { PostCard, CommentCard },
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
    <router-link to="/" class="d-block fs-5 mb-4">
      Return to posts
    </router-link>
    <PostCard :post="post" />
    <hr />
    <h4>{{ comments.length }} Comment{{ comments.length === 1 ? "" : "s" }}</h4>
    <div v-for="comment in comments" :key="comment.id" class="comment-card">
      <CommentCard :comment="comment" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
