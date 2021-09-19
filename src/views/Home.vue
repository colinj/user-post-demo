<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { User } from "@/typings";
import api from "@/api";

export default defineComponent({
  name: "Home",
  setup() {
    const app = reactive({ user: {} as User });

    onMounted(async () => {
      try {
        const response = await api.getUser(3);
        app.user = response.data;
      } catch (e) {
        console.error(e);
      }
    });
    return {
      app,
    };
  },
});
</script>

<template>
  <div>Home page - user posts</div>
  <div>Hello {{ app.user.name }}</div>
  <div>{{ app.user }}</div>
</template>
