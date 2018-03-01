<template>

    <div class="hero">
	<img v-bind:src="imagePath"/>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
 export default {

     name: 'HomePage',
     components: { AppHeader },
     data () {
	 return {
	     imagePath: '/static/images/flower.jpg'
	 }
     }
 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
 }
 img {
     width: 65%;
 }
</style>
