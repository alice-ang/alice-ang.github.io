<template>
  <div class="container">
    <section id="left">
      <h1>Hi there,</h1>
      <p>
        My name is Alice and I currently make things for fun but would like to
        make thing for money. I'm based in Skövde, Sweden where I just finished
        a bachelor's degree in web development at Högskolan i Skövde. Feel free
        to get in touch!
      </p>
      <button>
        <a href="mailto: alice.anglesjo@hotmail.com">Send Email</a>
        <i class="far fa-hand-point-left fa-2x"></i>
      </button>
    </section>
    <!-- <section id="right" v-on:click="modal()">
      <img :src="img.url" :alt="img.alt" />
    </section>
    <div class="modal" v-on:click="modal()">
      <div class="modal-content" v-on:click="modal()">
        <span class="close-button" v-on:click="modal()">&times;</span>
        <img :src="img.url" :alt="img.alt" v-on:click="modal()" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      CV: true,
      showModal: false,
      img: { url: require("../assets/CV.png"), alt: "My CV" },
    };
  },
  methods: {
    modal() {
      var modal = document.querySelector(".modal");
      modal.classList.toggle("show-modal");
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 80px;
  padding: 0;
  section {
    margin: auto;
    top: 0;
    padding: 1em;
  }
  #left {
    h1 {
      font-size: 50px;
      margin: 0;
    }
    p {
      text-align: left;
    }
    button {
      border-radius: 5px;
      width: 100%;
      background: tomato;
      transition: 0.3s ease-in-out;
      a,
      i {
        color: #ffffff;
        text-decoration: none;
        line-height: 50px;
      }
      &:hover {
        transform: scale(1.1);
        background: #e0563d;
        cursor: pointer;
        a {
          text-decoration: underline;
        }
      }
    }
  }
  #right {
    background-color: lightcoral;
    margin: 0;
    height: 300px;
    overflow: scroll;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }
  }

  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    overflow: scroll;
  }
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 50rem;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }
  }
  .close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;
  }
  .close-button:hover {
    background-color: darkgray;
  }
  .show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
  }
}
</style>
