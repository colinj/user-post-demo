<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { User, Post } from "@/typings";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup(props) {
    const paragraphs = computed(() => props.post.body?.split("\n"));
    return {
      paragraphs,
      userName: props.user.name,
    };
  },
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ post.title }}</h3>
      <h6 class="card-subtitle mb-2 text-muted">{{ userName }}</h6>
      <div class="card-text">
        <p v-for="(paragraph, index) in paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: lightblue;
}
</style>
