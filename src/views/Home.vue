<template>
<v-container grid-list-xl>
    <v-layout justify-center align-center wrap>
    <v-flex xs12 sm6 md4 lg4 xl4>
             <v-img 
          src="https://www.eithar.com/wp-content/uploads/2019/11/Travel-PNG-High-Quality-Image.png"         
          :style="{
          width: '400px',
          height:'400px',
      }"/> 
         <v-btn class="mr-4 my-4" color="primary"  outlined @click="show_sign=true">Connecter Vous</v-btn>
         <v-btn class="mr-4 my-4" color="warning" outlined @click="show_sign=false" >Enregister Vous </v-btn>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 xl6 id="second-part">
      <div class="home-text-block">
          <div class="home-text blue-grey--text darken-1">
            <h2> <i class="mdi mdi-account"></i> Connectez-vous à votre compte ou créez-en un</h2>
          </div>
           <div class="home-text blue-grey--text darken-1"> 
            <h2><i class="mdi mdi-pencil"></i> Remplissez et soumettez le formulaire de demande</h2>
            </div>
          <div class="home-text blue-grey--text darken-1">
            <h2><i class="mdi mdi-currency-usd"></i> Payez les frais de services via Stripe</h2>
          </div>
        </div>
      <v-hover id="template" >
         <template v-slot:default="{ hover }">
           <v-card :elevation="hover ? 18 : 6" class="mx-auto pa-6 transition-swing">
            <validation-observer
              ref="observer"
              v-slot="{ invalid }">
              <form v-if="show_sign==false" @submit.prevent="submit">
               <h2 class="form-title blue-grey--text darken-1 text-center pb-4 m-10">
              Créez votre Compte
              </h2>
              <v-spacer></v-spacer>
                <validation-provider
                  v-slot="{ errors }"
                  name="Name"
                  rules="required|max:10">
                  <v-text-field
                    v-model="name"
                    :rules="[rules.required]"
                       outlined
                       shaped
                    :counter="10"
                    :error-messages="errors"
                    label="Name"
                  ></v-text-field>
                </validation-provider>
                
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    outlined
                    shaped
                    :rules="[rules.required, rules.email]"
                    :error-messages="errors"
                    label="E-mail"
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required|max:8">
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    :error-messages="errors"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </validation-provider>
                <v-btn  class="mr-4"
                  type="submit"
                  :disabled="invalid"
                  color="success">
                  Enregistez Vous
                </v-btn>
              </form>
            </validation-observer>
            <!-- sign form -->
             <validation-observer
              ref="observer"
              v-slot="{ invalid }">
              <form v-if="show_sign==true" @submit.prevent="submit">
                 <h2 class="form-title blue-grey--text darken-1 text-center pb-5 m-10">
                  Connectez vous
                  </h2>
                  <v-divider></v-divider>
                  <v-spacer></v-spacer>
                 <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email">
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    :error-messages="errors"
                    label="E-mail"
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required|max:10">
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    :error-messages="errors"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </validation-provider>
                <v-btn class="primary mr-4"
                  type="submit"
                  :disabled="invalid">
                  Connectez Vous
                </v-btn>
              </form>
            </validation-observer>
           </v-card>
          </template>
      </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { VueTyper } from "vue-typer";
import home_logo from "../../public/home-image.png";
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';


export default {
 name:"Home",
 props :{
     
 },
  components: {
    "vue-typer": VueTyper,
    "validation-provider":ValidationProvider,
    'validation-observer':ValidationObserver
  },
  data() {
    return {
      show_sign:true,
      show1: false,
      password:'Password',
      hover:2,
      name:"",
      phoneNumber:"",
      email:"",
      errors:[],
      home_image:home_logo,
      text1: ["Demander votre Visa Sans Vous Deplacer"],
      rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          min: v => v.length >= 8 || 'Min 8 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
      },
    }
  },
  methods: {
    submit(){}
  }
  
}
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}
.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: rgb(28, 172, 255);
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: rgb(28, 172, 255);
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
#second-part{
  
  max-width: 100%;
  padding: 20px;
  margin: 0px;
}
#template{
 
  border-radius: 10px;

}
.form-title{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.home-text-block{
  width: 100%;
  margin-bottom: 30px;
  text-align: justify;
  text-justify: inter-word;
}
.home-text{
 margin-bottom: 30px;
}
</style>

