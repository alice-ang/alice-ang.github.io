<template>
  <div id="app">
          <div id="bg"></div>
    <section id="content">
      <Nav id="nav"/>
      <router-view id="router"/>
      <footer id="contact-info"><p><i class="fas fa-mobile-alt"></i> +4670-7273384</p> <p><i class="far fa-envelope"></i> alice.anglesjo@hotmail.com</p></footer>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
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
  font-family: 'Montserrat', sans-serif;
    #app{
      display: grid;
      grid-template-rows: auto auto;
      grid-template-areas: 
      "content"
    }
    #content{
      display: grid;
      grid-area: content;
      grid-template-rows: 50px auto 50px;
      grid-template-areas:
      "nav"
      "routerView"
      "footer";
        #nav {
          grid-area: nav;
        }
        #router {
          grid-area: routerView;
        }
        #contact-info{
          grid-area: footer;
          display: flex;
          width: 100%;
          justify-content: space-evenly;

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
