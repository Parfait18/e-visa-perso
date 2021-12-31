import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
export default new Vuetify({                         
  theme: {
    options: { customProperties: true},
    themes: {
      light: {
       
      },
      dark: {
     
      },
    },
  },
icons: {
  iconfont: 'md', // default is 'mdi'
} })