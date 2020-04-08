<template>
  <v-app class="home-wrapper">
    <div class="input-wrapper">
      <input v-model="message" placeholder="введіть текст">
      <div class='text'>
        {{message}}
      </div>
    </div>
    <div class='buttons'>
      <Button
      class='button'
      :color= red
      :title= font
      :method= fontMethod
      />
      <Button
      class='button'
      :color= white
      :title= color
      :method= colorMethod
      />
      <Button
      class='button'
      :color= blue
      :title= background
      :method= backgroundMethod
      />
      <Button
      class='button'
      :color= blue
      :title= background
      :method= brMethod
      />
    </div>
    <div class="json">
      <json />
    </div>
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex'

import Button from './button'
import json from './JSON'
export default {
  components: {
    Button,
    json
  },
  data: function() {
    return{
      red: 'error',
      blue: 'primary',
      white: 'normal',
      font: 'change font',
      color: 'change color',
      background: 'change background',
      backgroundMethod: 'chanheBackground',
      colorMethod: 'changeColor',
      fontMethod: 'changeFont',
      brMethod: 'addBreake',
      message: ''
    }
  },
  computed: {
    ...mapGetters(['pink', 'yellow','colorFirst', 'colorSecond', 'bigFont', 'smallFont'])
  }
}
</script>

<style scoped>
 .buttons{
   display: flex;
   justify-content: space-around;
 }
 .button{
   width: 220px;
 }
 .json{
   display: flex;
   justify-content: center;
 }
 .home-wrapper{
   width: 100%;
   height: 15%;
   display: flex;
   justify-content: center;
 }
 .input-wrapper{
   width: 100vw;
   display: flex;
 }
 input{
   margin: auto;
 }
 .text{
   margin: auto;
 }
 .json{
   width: 18%;
    margin: auto;
 }
</style>

