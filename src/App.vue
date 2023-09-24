<script>
import { ref, watch } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.body.classList.toggle('dark', isDarkMode.value);
    };

    watch(isDarkMode, (value) => {
      
    });

    return {
      toggleDarkMode,
    };
  },
};
</script>

<template>
  <div class="flex justify-center h-[100vh] dark:bg-darkBg dark:text-white">
    <div class="w-[50%] ">
      <Header/>
      <button @click="toggleDarkMode" class="bg-blue-800">Toggle Dark Mode</button>
      <h1 className="text-1xl text-blue-500 font-bold underline">
        Hello world!
      </h1>
      
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>

</style>
