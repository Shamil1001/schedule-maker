<script>
export default {
  name: "Task",
  computed: {},
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
};
// console.log("data", data[0]);
</script>

<template>
  <header>
    <div class="flex flex-col border-black">
      <span class="text-xl font-semibold">{{ data[0].title }} </span>
      <span class="text-sm">{{ data[0].about }}</span>
    </div>
  </header>
</template>
