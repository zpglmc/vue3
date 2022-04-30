<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    {{a}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data(){
    return{
      a:4
    }
  },
  setup(){
    console.log(this,'setup')
  },
  beforeCreate(){
    this.a = 10;
    console.log(this,'beforeCreate')
  },
  created(){
    this.a = 11;
    console.log(this,'created')
  }
});
</script>
