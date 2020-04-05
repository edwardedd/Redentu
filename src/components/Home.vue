<template>
  <v-app>
    <div class="relative-position cursor_normal none_outline"
     style="color: rgb(255, 255, 255); opacity: 1; border-radius: 6px; transform: rotate(0deg); border: 0px solid rgb(70, 144, 247); padding: 10px; text-align: center; letter-spacing: 0px; font-size: 32px; font-family: Aleo; font-weight: 300; text-decoration: none; box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px; text-transform: initial; font-style: normal; z-index: 2002; text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 0px; line-height: 1.5em;"
     spellcheck="false">
      <span style="padding-left:3px; padding-right: 3px; border-radius: 4px;" 
      :style="{'background-color': this.pink, 'color':this.colorFirst, 'font-size':this.smallFont}">Hi</span>
        <br/>
        <span class='text' style=" padding-left:3px; padding-right: 3px; border-radius: 4px;" 
        :style="{'background-color': this.pink, 'color':this.colorFirst,'font-size':this.smallFont}">My lovely</span>
        <span style="color: rgb(136, 14, 79)" :style="{'font-size':this.bigFont}">little</span>
      <span :style="{'background-color': this.yellow, 'color':this.colorSecond, 'font-size':this.smallFont}">Ponny</span>
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
      brMethod: 'addBreake'
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
</style>

