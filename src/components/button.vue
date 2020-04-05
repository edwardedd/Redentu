<template>
  <div>
    <v-btn v-if='method==="chanheBackground"' depressed :color='color' @click='chanheBackground'>{{title}}</v-btn>
    <v-btn v-if='method==="changeColor"' depressed :color='color' @click='changeColor'>{{title}} </v-btn>
    <v-btn v-if='method==="changeFont"' depressed :color='color' @click='fontMethod'>{{title}} </v-btn>
    <v-btn v-if='method==="addBreake"' depressed :color='color' @click='addBreake'>{{this.breakeTitle}} </v-btn>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['color', 'title','method'],
  data: function() {
    return{
      brakeVal: false,
      breakeTitle: 'Add line brake'
    }
  },
  computed: {
    ...mapGetters(['pink', 'yellow', 'colorFirst', 'colorSecond', 'bigFont', 'smallFont'])
  },
  methods: {
    chanheBackground () {
      if(this.pink==='pink'){
        this.$store.commit('set_pink', 'yellow')
      }else if(this.pink==='yellow'){
        this.$store.commit('set_pink', 'pink')
      };
      if(this.yellow==='yellow'){
        this.$store.commit('set_yellow', 'pink')
      }else if(this.yellow==='pink'){
        this.$store.commit('set_yellow', 'yellow')
      };
      let a = document.getElementsByTagName('span')[1]
      a.innerHTML='My lovely <br/>'
    },
    changeColor() {
      if(this.colorFirst==='purple'){
        this.$store.commit('set_colorFirst','white') 
      }else if(this.colorFirst==='white'){
        this.$store.commit('set_colorFirst','purple')
      };
      if(this.colorSecond==='white'){
        this.$store.commit('set_colorSecond','purple') 
      }else if( this.colorSecond==='purple'){
        this.$store.commit('set_colorSecond','white') 
      }
      
    },
    fontMethod() {
      if(this.bigFont==='54px'){
        this.$store.commit('set_bigFont','34px')
      }else if(this.bigFont==='34px'){
        this.$store.commit('set_bigFont','54px')
      };
      if(this.smallFont==='34px'){
        this.$store.commit('set_smallFont','54px')
      }else if(this.smallFont==='54px'){
        this.$store.commit('set_smallFont','34px')
      }
    },
    addBreake() {
      if(this.brakeVal===false){
        let a = document.getElementsByTagName('span')[1]
        a.innerHTML='My lovely <br/>'
        this.brakeVal = true,
        this.breakeTitle = 'Remove line brake'
      } else if(this.brakeVal===true){
        let a = document.getElementsByTagName('span')[1]
        a.innerHTML='My lovely',
        this.brakeVal = false,
        this.breakeTitle = 'Add line brake'
      }
      
    }
  }
}
</script>