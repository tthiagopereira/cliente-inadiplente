<template>
  <div id="app">
    <Header titulo = "Desafio - SUPERO"/>
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>

import Header from './components/templates/header/header'
import Footer from './components/templates/footer/footer'
import Menu from './components/templates/menu/menu'
import Content from './components/templates/content/content'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Menu,
    Content
  }
}
</script>

<style>
*{
  font-family: "Lato", sans-serif;
}
body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
        "header header"
        "menu content"
        "menu footer";
}
</style>
