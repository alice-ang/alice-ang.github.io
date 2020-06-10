<template>
    <div class="container">
        <div class="gallery-container" v-for="(project, i) in projects" :key="i">
            <a :href="project.link" target="_blank">
            <div class="gallery-item" >
                <div class="text">
                    <h2>{{project.title}}</h2>
                    <p>{{project.description}}</p>
                </div>
                <div class="image">
                    <img v-bind:src="project.img.url" alt="project.img.alt">
                      <div class="overlay"></div>
                </div>
            </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gallery',
     data() { 
         return { 
             projects: [
                 {
                     title: "Apex Legends Stats Tracker",
                     description: "Express, Node.js, API, Vue.js",
                     img:{
                        url: require("../assets/projects/apex.png"),
                        alt:"Form for entering apex legends profile information",
                        hover: require("../assets/projects/apex2.png"),
                     } ,
                     link: "https://mighty-sierra-34248.herokuapp.com/"
                 },
                 {
                     title: "Task and User Database",
                     description: "Express, Node.js, MongoDB, Vue.js",
                     img:{
                        url: require("../assets/projects/tasks.png"),
                        alt:"Post-it layout of tasks",
                     } ,
                     link: "https://polar-island-64082.herokuapp.com/"
                 },
                {
                     title: "Java Dino Puzzle",
                     description: "School Project | Java, Swing",
                     img:{
                        url: require("../assets/projects/puzzle.png"),
                        alt:"Dinosaur Puzzle in Java",
                     } ,
                 },
                {
                    title: "This Portfolio Site",
                    description: "Vue.js, Express, Node.js",
                    img:{
                    url: require("../assets/projects/portfolio.png"),
                    alt:"My portfolio site in Vue.js and Node.js",
                    } ,
                 },
                {
                    title: "Dashboard App",
                    description: "Summer Intern Project | Vue.js, SpringBoot, API",
                    img:{
                    url: require("../assets/projects/dashboard.png"),
                    alt:"Dashboard application in Vue.js and Springboot",
                    } ,
                    link: "https://1drv.ms/v/s!AlDwnON_r5i_hTD16-OdftLUW5L2"
                 },  
                {
                    title: "Filmmaker Portfolio",
                    description: "Bootstrap",
                    img:{
                    url: require("../assets/projects/film.png"),
                    alt:"Portfolio site for filmmaker",
                    } ,
                    link: "http://vschonberg.com/film.html"
                 },                               
             ]
         }
     }
}
</script>
<style lang="scss" >

@mixin sizing(){
    width: 100%;
    height: 100%;
}

$desktop: 900px; // min-width

@mixin desktop {
    @media (min-width: #{$desktop}){
        @content;
    }
}
@mixin shadow(){
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
}
@mixin overlay($position){
    position: $position;
    top: 0;
    width:100%;
    height:100%;
    left: 0;
    background-color:#000;
    opacity:0.5;
    z-index: 3;
    display: block;
}
.container{
    display: grid;
    grid-auto-rows: 200px 300px;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    grid-auto-flow: dense;
    @include desktop {
        width: 50%;
        margin: auto;
    }

    .gallery-item{
        @include sizing();
        position: relative;
        .image{
            @include sizing();
            @include shadow();
            overflow: hidden;
            transition: .5s ease-in-out;
            .overlay {
                position: absolute;
                top: 0;
                width:100%;
                height:100%;
                left: 0;
                background-color:#000;
                opacity:0.5;
                z-index: 3;
                display: block;
            }
            @include desktop{
                 .overlay {
                position: relative;
                top: 0;
                width:100%;
                height:100%;
                left: 0;
                background-color:#000;
                opacity:0.5;
                z-index: 3;
                display: block;
            }
            &:hover{
                 .overlay {
                        position: absolute;
                        top: 0;
                        width:100%;
                        height:100%;
                        left: 0;
                        background-color:#000;
                        opacity:0.5;
                        z-index: 3;
                        display: block;
                    }
                    img {
                        transform: scale(1.3);
                    }
            }
            }
            img{
                @include sizing();
                object-fit: cover;
                object-position: 50% 50%;
                cursor: pointer;
                transition: .5s ease-in-out;
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
        }
        @include desktop{
        .text {
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #ffffff;
            pointer-events: none;
            z-index: 4;
            transition: .3s ease-in-out;
        }

        &:hover .text {
            opacity: 1;
            animation: move-down .3s linear;
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