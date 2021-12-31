<template>
  <v-footer class="pa-5">
    <v-spacer></v-spacer>
   <v-layout justify-center align-center warp>
    <!-- <v-flex xs12 sm12 md8 lg10 xl10 >
    
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            class="mx-5"
            dark
            outlined
            color="green"
            :href="icon.href"
            target="_blank">
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>    
    </v-flex> -->
    <v-flex>
     <div class="text-center"> &copy; {{ new Date().getFullYear() }} <span class="green--text"> e-</span>visa</div>
    </v-flex>  
    <v-spacer></v-spacer> 
     <v-flex>
     <div class="text-center"> <span class="green--text"> e-</span>visa</div>
    </v-flex>    
   </v-layout>
    <v-spacer></v-spacer>
   
  </v-footer>
</template>

<script>
export default {
  data (){
    return {
       icons: [
        { href: "", icon: "fab fa-twitter" },
        {
          href: "",
          icon: "fab fa-facebook-f"
        },
        { href: "", icon: "fab fa-instagram" }
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
</style>