<template>
  <div class="container">
    <div class="gallery-container" v-for="(project, i) in projects" :key="i">
      <div class="gallery-item">
        <div class="text">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <span>
            <a v-if="project.github" :href="project.github" target="_blank"
              ><i class="fab fa-github-alt" title="Show code on Github"></i>
            </a>
            <a v-if="project.link" :href="project.link" target="_blank"
              ><i class="fas fa-laptop-code" title="Show demo"></i>
            </a>
          </span>
        </div>
        <div class="image">
          <img v-bind:src="project.img.url" alt="project.img.alt" />
          <div class="overlay"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
  data() {
    return {
      projects: [
        {
          title: "Apex Legends Stats Tracker",
          description: "Express, Node.js, API, Vue.js",
          github: "https://github.com/alice-ang/apex-tracker",
          img: {
            url: require("../assets/projects/apex.png"),
            alt: "Form for entering apex legends profile information",
          },
          link: "https://mighty-sierra-34248.herokuapp.com/",
        },
        {
          title: "Task and User Database",
          description: "Express, Node.js, MongoDB, Vue.js",
          github: "https://github.com/alice-ang/vue-db",
          img: {
            url: require("../assets/projects/tasks.png"),
            alt: "Post-it layout of tasks",
          },
          link: "https://polar-island-64082.herokuapp.com/",
        },
        {
          title: "Chat App",
          github: "https://github.com/alice-ang/chat",
          description: "Socket.io, Node.js",
          img: {
            url: require("../assets/projects/Chat.png"),
            alt: "Chat app using socket.io and node.js",
          },
          link: "http://chatter-vue.herokuapp.com",
        },
        {
          title: "Dashboard App",
          description: "Summer Intern Project | Vue.js, SpringBoot, API",
          img: {
            url: require("../assets/projects/dashboard.png"),
            alt: "Dashboard application in Vue.js and Springboot",
          },
          link: "https://1drv.ms/v/s!AlDwnON_r5i_hTD16-OdftLUW5L2",
        },
        {
          title: "E-commerce",
          description: "React, NextJS, Crystallize backend",
          github: "https://github.com/alice-ang/GM_code",
          img: {
            url: require("../assets/projects/GM.png"),
            alt: "e-commerce shop nextjs",
          },
          link: "https://by-ewa-ang-nextjs.vercel.app/",
        },
        {
          title: "Filmmaker Portfolio",
          description: "Vue.js, Node.js",
          img: {
            url: require("../assets/projects/vendela.png"),
            alt: "Portfolio site for filmmaker",
          },
          link: "http://vschonberg.com/",
        },
        {
          title: "E-commerce",
          description: "React, Gatsby, GraphQL, Shopify backend",
          img: {
            url: require("../assets/projects/vendela.png"),
            alt: "E-commerce shopify",
          },
          link: "https://gifted-hugle-05efac.netlify.app/",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@mixin sizing() {
  width: 100%;
  height: 100%;
}

$desktop: 900px; // min-width

@mixin desktop {
  @media (min-width: #{$desktop}) {
    @content;
  }
}
@mixin shadow() {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
@mixin overlay($position) {
  position: $position;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 3;
  display: block;
}
.container {
  display: grid;
  grid-auto-rows: 300px 300px;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: dense;
  @include desktop {
    width: 50%;
    margin: auto;
  }

  .gallery-item {
    @include sizing();
    position: relative;
    .image {
      @include sizing();
      @include shadow();
      overflow: hidden;
      transition: 0.5s ease-in-out;
      .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
        background-color: #000;
        opacity: 0.5;
        z-index: 3;
        display: block;
      }
      @include desktop {
        .overlay {
          position: relative;
          top: 0;
          width: 100%;
          height: 100%;
          left: 0;
          background-color: #000;
          opacity: 0.5;
          z-index: 3;
          display: block;
        }
        &:hover {
          .overlay {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            left: 0;
            background-color: #000;
            opacity: 0.5;
            z-index: 3;
            display: block;
          }
          img {
            transform: scale(1.3);
          }
        }
      }
      img {
        @include sizing();
        object-fit: cover;
        object-position: 50% 50%;
        cursor: pointer;
        transition: 0.5s ease-in-out;
      }
    }
    .text {
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      pointer-events: none;
      z-index: 4;
      span {
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        a {
          text-decoration: none;
          pointer-events: auto;
          padding: 10px;
          color: white;
          transition: 0.3s ease-in-out;
          i {
            font-size: 1.5em;
          }
          &:hover {
            color: #e96d71;
            text-decoration: underline;
          }
        }
      }
    }
    @include desktop {
      .text {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        pointer-events: none;
        z-index: 4;
        transition: 0.3s ease-in-out;
      }

      &:hover .text {
        opacity: 1;
        animation: move-down 0.3s linear;
        padding: 1em;
        width: 100%;
      }
    }
  }
}

@keyframes move-down {
  0% {
    top: 10%;
  }
  50% {
    top: 35%;
  }
  100% {
    top: 50%;
  }
}
</style>
