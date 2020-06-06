
<template>
    <div>
        <nav>
        <ul>
            <li><router-link to="/gallery">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
    </div>
</template>
<script>
export default {
    name: 'Nav',
     data() { 
         return { 
             myMessage : 'My message goes here'
         }
     }
}
</script>
<style lang="scss" >
$desktop: 900px; // min-width

@mixin desktop {
    @media (min-width: #{$desktop}){
        @content;
    }
}
nav {
    height: 50px;
    @include desktop {
        width: 50%;
        margin: auto;
    }
    ul {
        display: flex;
        justify-content: space-evenly;
        li {
            transition: 0.3s;
            display: inline-block;
            font-weight: bold;
            a{
                text-decoration: none;
                color: #f3f3f3;
            }
            &:hover {
                transform: scale(1.1);
                border-bottom: 2px solid #E96D71;
            }
        }
    }
}
</style>