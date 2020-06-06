<template>
  <div class="container">
      <section id="left">
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro dolorum quo quis voluptates corrupti, nesciunt libero quidem culpa magni accusamus praesentium perspiciatis deserunt adipisci voluptate, cum ipsa explicabo nobis!</p>
        <button>Button</button>
      </section>
      <section id="right">
        <img src="https://source.unsplash.com/1600x900/?food" alt="">
      </section>
  </div>
</template>

<script>


export default {
  name: 'Contact',
    data(){
        return{

        }
    }

}
</script>
<style lang="scss" scoped>

.container {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
    grid-gap: 20px;
    padding: 0;
        section {
            margin: auto;
            top: 0;
            padding: 1em;
        }
        #left{
            h1 {
                font-size: 50px;
                margin: 0;
            }
            button{
                border-radius: 5px;
                padding: 1em;
                margin: 1em;
                width: 50%;
                color: #ffffff;
                background: tomato;
                transition: 0.3s ease-in-out;
                &:hover{
                    transform: scale(1.1);
                    background: #e0563d;
                    cursor: pointer;
                }
            }
        }
        #right{
            background-color: lightcoral;
            height: fit-content;
            width: 100%;
            z-index: 10;
            img {
                width: 100%;
                object-fit: cover;

            }
        }
}


</style>
