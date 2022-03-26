<template>
  <n-config-provider :theme="darkTheme">
    <div class="app-container">
      {{ message }}
      <n-button type="primary" size="medium">aa</n-button>
    </div>
  </n-config-provider>
</template>

<script lang="ts">
import Vue, { defineComponent, ref, onMounted } from "vue";
import { darkTheme, lightTheme, NButton, NConfigProvider } from "naive-ui";
export default defineComponent({
  components: { NButton, NConfigProvider },
  setup() {
    const message = ref("hello");
    const theme = ref("dark");
    const printHello: () => void = () => {
      console.log("hello, vue-app");
    };

    onMounted(() => {
      printHello();
    });
    return {
      message,
      theme,
      darkTheme,
      lightTheme,
      printHello,
    };
  },
});
</script>

<style lang="scss">
.app-container {
  height: 1800px;
  width: 100%;
}
</style>
