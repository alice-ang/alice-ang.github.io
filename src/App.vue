<template>
  <div id="app">
          <div id="bg"></div>
    <section id="content">
      <Nav id="nav"/>
      <router-view id="router"/>
    </section>
  </div>
</template>
 
<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
<style lang="scss" >
$desktop: 840px;

@mixin desktop {
    @media (min-width: #{$desktop}){
        @content;
    }
}
body {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    #app{
      display: grid;
      grid-template-rows: auto auto;
      grid-template-areas: 
      "content"
    }
    #content{
      display: grid;
      grid-area: content;
      grid-template-rows: 50px auto;
      grid-template-areas:
      "nav" 
      "routerView";
        #nav {
          grid-area: nav;
        }
        #router {
          grid-area: routerView;
        }
      }

    #bg{
      grid-area: content;
      height: 100vh;
      background-image: linear-gradient( 135deg, #FAD7A1 10%, #E96D71 100%);        
      display: block;
        z-index: -1;
        clip-path: polygon(35% 0, 100% 0%, 100% 100%, 65% 100%);
        @include desktop{
            clip-path: polygon(34% 0, 100% 0%, 100% 100%, 58% 100%);
        };


    }
}

</style>
