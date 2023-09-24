<script>
import { format, isToday } from "date-fns";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const today = new Date();
      const formatted = format(today, "EEEE, MMMM d, yyyy");
      return formatted;
    },
  },
};
</script>

<template>
  <header>
    <div class="flex flex-col">
      <span class="text-xl font-semibold">Upcoming Sessions </span>
      <span class="text-sm">{{ formattedDate }}</span>
    </div>
  </header>
</template>
