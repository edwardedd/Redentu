<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <div class="header">
      <h1>Test task "Redentu"</h1>
      <h4>05.04.2020</h4>
    </div>

        

    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
 <style scoped>
 .header{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
 }
 </style>