<script>
import { ref, watch } from "vue";
import Header from "./components/Header.vue";
import Task from "./components/Task.vue";
import { scheduleData } from "./scheduleData.ts";

export default {
  components: {
    Header,
    Task,
  },
  data() {
    return {
      scheduleData: scheduleData,
    };
  },
  setup() {
    const isDarkMode = ref(true);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.body.classList.toggle("dark", isDarkMode.value);
    };

    watch(isDarkMode, (value) => {});

    return {
      toggleDarkMode,
    };
  },
};
console.log(scheduleData[0]);
</script>

<template>
  <div class="flex justify-center h-[100vh] dark:bg-darkBg dark:text-white">
    <div class="w-[50%] border-gray-600">
      <Header />
      <div v-for="item in scheduleData">
        <Task :data="item" />
      </div>
      <button @click="toggleDarkMode" class="bg-red-800 rounded">
        Toggle Dark Mode
      </button>
    </div>
  </div>
</template>

<style scoped></style>
