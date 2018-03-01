<template>

    <div class="hero">
	   <img v-bind:src="imagePath"/>
     <p>We are sisters who see a lot of people in real need around us. Being poor students ourselves, we decided to try to change the world - one handmade journal at a time. All proceeds go to local individuals and families who need a boost. Your journal will be a treasure for the rest of your life (not to mention your posterity's), and a real blessing to somebody else's.</p>

    </div>
</template>

<script>
 export default {

     name: 'About',
     data () {
	 return {
	     imagePath: '/static/images/us.jpg'
	 }
     }
 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Gudea');
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {

 }

 p{
 padding: 40px;
 display: block;
 text-align: justify;
 width: 800px;
 margin: 0 auto;
 font-family: 'Gudea', sans-serif;
 }
 img {
     width: 75%;
 }
</style>
