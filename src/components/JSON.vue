<template>
  <v-app>
    {{this.JSON}}
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  data: function() {
    return{
      json: []
    }
  },
  mounted() {
    return this.addItems()
    console.log(this.json)
  },
  computed: {
    ...mapGetters(['JSON']),
  
      // addItems()
  
  },
  methods: {
    addItems() {

      this.json = [
        {
          'tekst':"my lovely",
          'color': this.colorFirst,
          'font': this.smallFont,
          'bacground-color': this.pink
        },
        {
          'tekst':"little",
          'color': 'purple',
          'font': this.bigFont,
          'bacground-color': 'white'
        },
        {
          'tekst':"Ponny",
          'color': this.colorSecond,
          'font': this.smallFont,
          'bacground-color': this.yellow
        },
      ]
      let q = JSON.stringify(this.json)
      console.log(q)
    }
  }
}
</script>


{
{
text: 'My lovely',
fontSize: '12px',
color: 'red'
},
{
text: 'little',
fontSize: '16px',
color: 'pink'
},
}