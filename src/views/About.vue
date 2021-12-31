<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ bar}}</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  data(){
    return {
      bar:''
    }
  },
  created(){
    this.foo()
    this.bar="Turing"
  },
  methods:{
    foo(){
      this.bar="Welcomme un e-visa"
    }
  }
};
</script>

<style></style>
