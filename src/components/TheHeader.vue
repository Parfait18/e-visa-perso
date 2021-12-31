<template>
  <v-container id="app-bar">
    <v-navigation-drawer v-if="drawer" v-model="drawer" right temporary app width="150" height="340">
      <v-list class="pt-4">
        <v-list-item active-class="green--text" to="/">
          <v-list-item-content>
            <v-list-item-title class="title-color">ACCEUIL</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/services">
          <v-list-item-content>
            <v-list-item-title class="title-color">SERVICES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/demand">
          <v-list-item-content>
            <v-list-item-title class="title-color">MES DEMANDES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/contact">
          <v-list-item-content>
            <v-list-item-title class="title-color">CONTACT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app dense fixed  v-bind:color="goDark ? dark : white"  scroll-off-screen>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
       <v-app-bar-nav-icon>
        <v-img :src=logo  
        id="logo"
         :style="{
          borderRadius: '100%',
          margin:'10px',
          width: '45px',
          height: '45px',
        }"/>
      </v-app-bar-nav-icon>
      <v-toolbar-title style="" class="headline">
        <span class="mx-5 font-weight-light">E-visa</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up">
        <v-icon v-if="goDark==true">fas fa-sun</v-icon>
        <v-icon v-else>fas fa-moon</v-icon>
      </v-btn>
      <v-toolbar-items class="hidden-sm-and-down ">
        <v-btn text to="/" active-class="green--text headline">ACCEUIL</v-btn>
        <v-btn text to="/services"  active-class="green--text headline">SERVICES</v-btn>
        <v-btn text to="/demand"  active-class="green--text headline">DEMANDES</v-btn>
        <v-btn text to="/contact"  active-class="green--text headline">CONTACT</v-btn> 
        <v-btn text @click="changeTheme" depressed small icon class="hidden-sm-and-down">
          <v-icon v-if="goDark==true">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    
  </v-container>
</template>

<script>
import img from "../../public/logo.png";
import FixedHeader from 'vue-fixed-header'

export default {
  props: {
    goDark: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: null,
      logo: img,
    };
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    }
  },
    components: {
    FixedHeader
  }

};
</script>

<style>
#app-bar{
 font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#app-bar {
  padding: -10px;
}

</style>