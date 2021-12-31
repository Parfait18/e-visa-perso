<template>
  <v-app :dark="goDark">
  <TheHeader :goDark="goDark" @changeTheme="updateTheme($event)"/>
    <v-main>
      <v-container align-center>
        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import Vuetify from 'vuetify/lib';

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {   
      goDark: false ,
       opts:{
        theme:{ dark: false }
       }, 
      vuetify : new Vuetify(this.opts) };
  },
  methods: {
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme;
       this.$vuetify.theme.dark=this.goDark;
    }
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>
