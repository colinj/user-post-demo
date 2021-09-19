<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { Comment } from "@/typings";

export default defineComponent({
  props: {
    comment: {
      type: Object as PropType<Comment>,
      required: true,
    },
  },
  setup(props) {
    const paragraphs = computed(() => props.comment.body?.split("\n"));
    return {
      paragraphs,
    };
  },
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ comment.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ comment.email }}</h6>
      <div class="card-text">
        <p v-for="(paragraph, index) in paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="text-end text-muted">Comment ID: {{ comment.id }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
