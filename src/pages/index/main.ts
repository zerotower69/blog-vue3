import Vue, { createApp } from 'vue';
import PC from './PC.vue';

//if ocurs ts-2345 error,please rewrite your vue-shims.d.ts file!
//https://stackoverflow.com/questions/62216862/error-in-vue3-argument-of-type-typeof-import-dist-vue-is-not-assignabl#new-answer?newreg=4b19baaee0d940709650c06d34f28846
const app = createApp(PC).mount('#app')