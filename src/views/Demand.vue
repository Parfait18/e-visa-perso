<template>
  <v-container grid-list-xl>
    <v-layout v-if="new_demand==true" row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md8 lg10 xl10>
        <h2 class="blue-grey--text darken-1 text-center pb-4 mb-4">
          Veuillez suivre les étapes suivantes pour faire une demande de visa
        </h2>
        <div>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1" >Information Personnelles</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 2" step="2">Informations supplémentaires</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 3" step="3" >Informations supplémentaires</v-stepper-step>
            
             <v-divider></v-divider>

            <v-stepper-step step="4" :complete="isOkay" >Validation</v-stepper-step>
            
          </v-stepper-header>
          <v-stepper-items class="mt-10">
            <v-stepper-content step="1">
              <v-text-field label="Nom de Famille"> </v-text-field>
              <v-text-field label="Prénoms"> </v-text-field>
              <v-select :items="gender" label="Genre" ></v-select>
              <div>
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="birth_date"
                    label="Date de Naissance"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="birth_date"
                  :active-picker.sync="activePicker"
                  :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
                </v-menu>
              </div>
              <v-select filled :items="countries" label="Pays d'origine" ></v-select>
              <!-- <v-combobox
                v-model="checkbox"
                :items="cases"
                label="Telefon Bileşenleri"
                multiple
                chips>
                </v-combobox> -->
              <v-btn  @click="new_demand = false"  class="mx-5 m-5" color="red lighten-2">Fermer </v-btn>
               <v-btn color="primary" @click="step = 2"> Continuer</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
            <v-select filled  :items="visa_types" label="Type de Visa" ></v-select>
            <v-textarea
                name="motif"
                filled
                label="Motif de Voyage"
                auto-grow
                value=""
              ></v-textarea>
              <v-textarea
                name="ordremission"
                filled
                label="Ordre de Mission"
                auto-grow
                value="">
              </v-textarea>
                  <v-btn  @click="step = 1"  color="warning" class="mx-5">Retour</v-btn>
                  <v-btn color="primary" class="mx-5" @click="step = 3"> Continuer </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-select :items="passport_types" filled label="Type de Passport"></v-select>
                <div>
              <v-menu
                v-model="expi"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date_expi"
                    label="Date D'expiration"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date_expi"
                  :active-picker.sync="activePicker"
                  :min="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                  @change="expir_save"
                ></v-date-picker>
                </v-menu>
              </div>
               <v-text-field label="Numero du Passport"> </v-text-field>
                <v-file-input
                  v-model="image"
                  label="Certificat de vacination "
                  filled
                  prepend-icon="mdi-camera"
                  show-size
                ></v-file-input>
               <v-btn  @click="step = 2"  class="mx-5" color="warning" >Retour</v-btn>
              <v-btn  @click="step = 4"  class="mx-5" color="primary" >Continuer</v-btn>
            </v-stepper-content>   
            
            <v-stepper-content step="4">
            <v-alert :value="true"  class="gray--text m-10" type="success"> Demande envoyée, veuillez attendre pour approbation </v-alert> 
             <v-btn  @click="step = 3"  class="mx-5" color="warning" >Retour</v-btn>
            <v-btn color="success" @click="isOkay = true">Valider</v-btn>
            </v-stepper-content> 
          </v-stepper-items>
        </v-stepper>
      </div>
      </v-flex>
    </v-layout>
    
     <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md8 lg10 xl10>
        <v-card>
        <v-card-title>
          <v-btn  @click="new_demand = true"  class="mx-5" color="warning" ><v-icon left> mdi-plus</v-icon>Nouvelle demande </v-btn>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="demands"
          :items-per-page="5"
          class="elevation-2"
          :search="search">
        <template v-slot:item.statut="{ item }">
              <v-chip
                :color="getColor(item.statut)"
                dark>
            {{ item.statut }}
          </v-chip>
        </template>
        </v-data-table> 
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Demand',
  components: {
  
  },
  data () {
    return {
        new_demand:false,
        search:'',
        image:null,
        activePicker: null,
        menu: false,
        expi:false,
        activePicker: null,
        birth_date:null,
        date_expi:null,
        step:1,
        cases: [
        'toto1',
        'toto2',
        'toto2'
      ],
       countries: ['Bénin','France'],
       visa_types:['Type 1','Type2'],
       passport_types:['Type 1','Type2'],
       isOkay: false,
       gender: [
       'Masculin',
       'Féminin',
      ],
        search: '',
        
        headers: [
          {
            text: 'Pays de départ',
            align: 'start',
            filterable: false,
            value: 'depart',
          },
          { text: 'Destination', value: 'destination' },
          { text: 'Embassade', value: 'embassade' },
          { text: 'Statut', value: 'statut' },
          { text: 'Date', value: 'date' },
        ],
           demands: [
          {
            depart: 'Bénin',
            destination: 'France',
            embassade: "France",
            statut: 'Validé',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
           
          },
           {
            depart: 'Bénin',
            destination: 'France',
            embassade: "France",
            statut: 'Refusé',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
           
          },
            {
            depart: 'Bénin',
            destination: 'France',
            embassade: "France",
            statut: 'Validé',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
           
          },
             {
            depart: 'Bénin',
            destination: 'France',
            embassade: "France",
            statut: 'En cours',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
           
          },
              {
            depart: 'Bénin',
            destination: 'France',
            embassade: "France",
            statut: 'Refusé',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
           
          },
               {
            depart: 'Bénin',
            destination: 'France',
            embassade: "France",
            statut: 'Validé',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
           
          },
           {
            depart: 'Bénin',
            destination: 'France',
            embassade: "France",
            statut: 'En cours',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
           
          }
       
        ],
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
    expir (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods:{
     nextStep() {
      this.step++;
    },
    save (date) {
      this.date=date
    },
    expir_save (date) {
      this.date_expir=date
    },
    getColor (statut) {
        if (statut=='Validé') return 'green'
        else if (statut =="En cours") return 'orange'
        else return 'red'
      },
    
  }
}
</script>
