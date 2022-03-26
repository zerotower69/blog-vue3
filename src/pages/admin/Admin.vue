<template>
  <n-config-provider :theme="darkTheme">
    <div class="app-container">
      {{ message }}
      <n-button type="primary" size="medium">aa</n-button>
    </div>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { darkTheme, lightTheme, NButton, NConfigProvider } from "naive-ui";
export default defineComponent({
  components: { NButton, NConfigProvider },
  setup() {
    const message = ref("hello admin");
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

<style lang="scss">
.app-container {
  height: 1800px;
  width: 100%;
}
</style>
