//告诉TypeScript编译器.vue其实是一个Vue

// declare module "*.vue" {
//     import Vue from 'vue';
//    export default Vue
// }

// resolve the ts-2345 error
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}