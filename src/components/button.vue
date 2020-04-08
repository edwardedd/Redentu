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
      breakeTitle: 'Add line brake',
      mainArray: []
    }
  },
  computed: {
    ...mapGetters(['JSON', 'yellow', 'colorFirst', 'colorSecond', 'bigFont', 'smallFont'])
  },
  methods: {
    chanheBackground () {
      let selectedText = window.getSelection()
      let range = selectedText.getRangeAt(0);
      let newNode = document.createElement("span");
      newNode.setAttribute("style", "background-color: red;");
      range.surroundContents(newNode);
      let array = {
        'text': `${range.toString()}`,
        'font-size': '15px',
        'color':'purple',
        'background-color':'red'
      };
      this.mainArray.push(array)
      this.$store.commit('set_JSON',this.mainArray)
      console.log('111', this.mainArray)
    },
    changeColor() {
      let selectedText = window.getSelection()
      let range = selectedText.getRangeAt(0);
      let newNode = document.createElement("span");
      newNode.setAttribute("style", "color: purple;");
      range.surroundContents(newNode);
      let array = {
        'text': `${range.toString()}`,
        'font-size': '15px',
        'color':'purple',
        'background-color':'white'
      };
      this.mainArray.push(array)
      this.$store.commit('set_JSON',this.mainArray)
    },
    fontMethod() {
      let selectedText = window.getSelection()
      let range = selectedText.getRangeAt(0);
      let newNode = document.createElement("span");
      newNode.setAttribute("style", "font-size: 25px;");
      range.surroundContents(newNode)
      let array = {
        'text': `${range.toString()}`,
        'font-size': '25px',
        'color':'black',
        'background-color':'white'
      };
      this.mainArray.push(array)
      this.$store.commit('set_JSON',this.mainArray)
    },
    addBreake() {
      
      let selectedText = window.getSelection()
      let range = selectedText.getRangeAt(0);

      let newNode = document.createElement("span");
      // newNode.setAttribute("style", "background-color: pink;");
      console.log(this.JSON)
      let newEle = document.createElement('br')
      newNode.innerHTML = `${range.toString()}+<br>`
      range.insertNode(newEle);

    
        
    }
  }
}
</script>

