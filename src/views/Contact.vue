<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center wrap class="mt-4 pt-2">
      <v-flex  id="f-contact" xs12 sm4 md4 lg4 xl4>
        <h2 class="pb-4 mt-2">
          <span>E-</span>
          <span class="green--text">VISA</span>
        </h2>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-map-marker-alt</v-icon>
          <span  class="gray--text">Camerooon,&nbsp;</span>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-envelope</v-icon>
          <span>e-via <span class="green--text">@gmail.com</span>
         </span>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-phone</v-icon>
          <span>+387&nbsp;</span>
          <span class="green--text">61 596 676</span>
        </div>
        
      </v-flex>

      <v-flex id="s-contact" xs12 sm4 md4 lg4 xl4>
        <h2 class="pb-4 mb-4">
          <span>Contactez</span>
          <span class="green--text"> Nous</span>
        </h2>

        <form method="POST" action="">
          <v-text-field
            name="name"
            color="green"
            background-color="transparent"
            v-model="name"
            :error-messages="nameErrors"
            label="Name"
            required
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            type="email"
            color="green"
            background-color="transparent"
            name="email"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            color="green"
            background-color="transparent"
            :counter="200"
            :error-messages="bodyErrors"
            v-model="body"
            label="Textarea"
            name="body"
            @blur="$v.body.$touch()"
          ></v-textarea>
          <v-btn
            @click="submit"
            type="submit"
            color="green"
            class="white--text mr-4 my-4"
            :disabled=" (body.length<=20)"
          >SEND MESSAGE</v-btn>
          <v-btn class="mr-4 my-4"  @click="clear">clear</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength
} from "vuelidate/lib/validators";
export default {
  name:"Contact",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    body: { required, minLength: minLength(20) }
  },
  data() {
    return {
      name: "",
      email: "",
      body: ""
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Votre nom doit avoir au plus 20 characters ");
      !this.$v.name.required && errors.push("Le Nom est bligatoire.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Veuillez entrer un email valid");
      !this.$v.email.required && errors.push("L'email est obligatoire");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength &&
        errors.push("Le texte doit être de 20 characters au moins");
      !this.$v.body.required && errors.push("Le texte est obligatoire");
      return errors;
    }
  }
};
</script>

<style lang="scss" scoped>
#f-contact{
 
 padding: 20px;
}
#s-contact{
 padding: 20px;

}
</style>
