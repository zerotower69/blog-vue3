<template>
  <n-config-provider :theme="darkTheme">
    <div class="app-container" style="height: 1800px; width: 100%">
      {{ message }}
      <n-button type="primary" size="medium">aa</n-button>
    </div>
  </n-config-provider>
</template>

<script>
import { defineComponent, ref } from "vue";
import { darkTheme, lightTheme, NButton, NConfigProvider } from "naive-ui";
export default defineComponent({
  components: { NButton, NConfigProvider },
  setup() {
    const message = ref("hello");
    const theme = ref("dark");
    return {
      message,
      theme,
      darkTheme,
      lightTheme,
    };
  },
});
</script>
