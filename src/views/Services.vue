<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs8 sm8 md8 lg10 xl10>
        <h2 class="pl-4">
          <span>Our </span>
          <span class="green--text">Services</span>
        </h2>
      </v-flex>
      <v-flex v-for="service in services" :key="service.src" xs12 sm12 md4 lg4 x4>
        <v-card id="card" color="transparent" class="mx-auto" max-width="344">
          <v-img
            :src="service.src"
            height="150"
            lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            contain
          ></v-img>
         <v-card-title class="blue-grey--text darken-1 justify-center">
              <v-flex subheading font-weight-bold>{{service.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name:"Services",
  data() {
    return {

      services: [ 
        {
          src: "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_960_720.png",
          title: "Inscription/ Connection"
        },
        {
          src: "https://cdn.pixabay.com/photo/2018/01/26/21/23/visa-3109800_960_720.jpg",
          title: "Demandez un visa"
        },
       
        {
          src: "https://cdn.pixabay.com/photo/2016/06/13/15/07/presentation-1454403_960_720.png",
          title: "Consultez vos demandes"
        }
      ]
    };
  }
};
</script>
<style >
.v-img--reveal {
  opacity: 0.3;
}
#card{
  padding: 10px;;
}
</style>