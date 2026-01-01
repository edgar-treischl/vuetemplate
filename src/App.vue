<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card class="pa-6">
          <v-card-title>Vuetify is working 🎉</v-card-title>
          <v-btn color="primary">Test Button</v-btn>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
